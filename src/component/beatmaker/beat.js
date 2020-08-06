import React from "react";
import styled from "styled-components";
import DrumKit from "./beatmaker";
import { instanceOf } from 'prop-types';
import cookies from 'react-cookies';

const Styles = styled.div`
  .kick-pad,
  .snare-pad,
  .hihat-open-pad,
  .clap-pad,
  .hihat-closed-pad {
    width: 8rem;
    height: 8rem;
    border: 0.1rem solid;
    border-color: grey;
    cursor: pointer;
  }
  .kick-pad {
    /*background: rgb(160, 211, 224);*/
  }
  .snare-pad {
    /*background: rgb(224, 160, 208);*/
  }
  .hihat-open-pad {
    /*background: rgb(224, 194, 160);*/
  }
  .clap-pad {
    /*background: rgb(255, 102, 102);*/
  }
  .hihat-closed-pad {
    /* background: rgb(255, 153, 204);*/
  }
  .kick-pad.active {
    background: #feda75;
  }
  .snare-pad.active {
    background: #fa7e1e;
  }
  .hihat-open-pad.active {
    background: #d62976;
  }
  .clap-pad.active {
    background: #962fbf;
  }
  .hihat-closed-pad.active {
    background: #4f5bd5;
  }
  .sequencer {
    display: flex;
    min-height: 30vh;
    background: transparent;

    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }

  .hihat-open-track,
  .snare-track,
  .kick-track,
  .clap-track,
  .hihat-closed-track {
    display: flex;
    align-items: center;
    width: 70%;
  }
  .kick,
  .snare,
  .hihat-open,
  .clap,
  .hihat-closed {
    display: flex;
  }
  .controls {
    display: flex;

    align-items: center;

    margin: 0rem 2rem;
    width: 240px;
  }
  .controls button {
    padding: 1rem;
    border: none;
    background: rgb(88, 88, 88);
    color: white;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.5s ease;
    margin-right: 30px;
  }

  .pad {
    transition: all 0.5s ease;
  }

  .play {
    padding: 1rem 2rem;
    font-size: 1.5rem;
    background: rgb(88, 88, 88);
    color: white;
    border: none;
    cursor: pointer;
    margin-top: 3rem;
  }

  .save {
    padding: 1rem 2rem;
    font-size: 1.5rem;
    background: rgb(88, 88, 88);
    color: white;
    border: none;
    cursor: pointer;
    margin-top: 3rem;
    margin-right: 2rem;
  }

  .button-container {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  select {
    padding: 1rem;
    font-size: 1rem;
  }

  .mute.active {
    background: rgb(182, 182, 182);
  }

  .tempo {
    margin: 3rem;
    width: 30%;
  }
  .tempo-slider {
    padding: 0.2rem;
    -webkit-appearance: none;
    margin: 1rem 0rem;
    width: 100%;
    position: relative;
    background: rgb(88, 88, 88);
    cursor: pointer;
    border-radius: 1rem;
  }
  .tempo p {
    font-size: 1.5rem;
    margin: 2rem;
    text-align: center;
  }

  @keyframes playTrack {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(1.2);
    }
  }

  body {
    background-color: black;
    background-opacity: 0.6;
  }
  .controls h1 {
    font-family: Helvetica;
    font-size: 15px;
    color: white;
    margin-right: 30px;
    width: 60px;
    height: 50px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default class Beat extends React.Component {

  componentDidMount() {
    const drumKit = new DrumKit();

    //Event Listeners
    drumKit.pads.forEach((pad) => {
      pad.addEventListener("click", drumKit.activePad);
      pad.addEventListener("click", drumKit.clickSounds);
      pad.addEventListener("animationend", function () {
        this.style.animation = "";
      });
    });

    drumKit.playBtn.addEventListener("click", function () {
      drumKit.updateBtn();
      drumKit.start();
    });

    drumKit.saveBtn.addEventListener("click", function () {
      let preset_info = new Array();

      for (let i = 0; i < 16; i++) {
        let result_sound = drumKit.saveSounds();
        preset_info = preset_info.concat(result_sound);
      }
      //const { cookies } = this.props;
      //cookies.set('preset_info', preset_info);
      cookies.save('preset_info', preset_info)

      let result_t = cookies.load('preset_info')
      console.log(result_t)

      console.log(preset_info);
    });

    drumKit.selects.forEach((select) => {
      select.addEventListener("change", function (e) {
        drumKit.changeSound(e);
      });
    });
    drumKit.muteBtns.forEach((btn) => {
      btn.addEventListener("click", function (e) {
        drumKit.mute(e);
      });
    });
  }

  render() {
    return (
      <Styles>
        <body>
          <div class="sequencer">
            <div class="kick-track">
              <div class="controls">
                <h1>Kick</h1>
                <button data-track="0" class="mute kick-volume">
                  <i class="fas fa-volume-mute">🔊</i>
                </button>
                <div name="kick-select" id="kick-select">
                  <option value="./sounds/0.wav"></option>
                </div>
              </div>
              <div class="kick">
                <div class="pad kick-pad b0"></div>
                <div class="pad kick-pad b1"></div>
                <div class="pad kick-pad b2"></div>
                <div class="pad kick-pad b3"></div>
                <div class="pad kick-pad b4"></div>
                <div class="pad kick-pad b5"></div>
                <div class="pad kick-pad b6"></div>
                <div class="pad kick-pad b7"></div>
                <div class="pad kick-pad b8"></div>
                <div class="pad kick-pad b9"></div>
                <div class="pad kick-pad b10"></div>
                <div class="pad kick-pad b11"></div>
                <div class="pad kick-pad b12"></div>
                <div class="pad kick-pad b13"></div>
                <div class="pad kick-pad b14"></div>
                <div class="pad kick-pad b15"></div>
              </div>
            </div>
            <div class="hihat-open-track">
              <div class="controls">
                <h1>Open High hat</h1>
                <button data-track="1" class="mute hihat-open-volume">
                  <i class="fas fa-volume-mute">🔊</i>
                </button>
                <div name="hihat-open-select" id="hihat-open-select">
                  <option value="./sounds/1.wav"></option>
                </div>
              </div>
              <div class="hihat-open">
                <div class="pad hihat-open-pad b0"></div>
                <div class="pad hihat-open-pad b1"></div>
                <div class="pad hihat-open-pad b2"></div>
                <div class="pad hihat-open-pad b3"></div>
                <div class="pad hihat-open-pad b4"></div>
                <div class="pad hihat-open-pad b5"></div>
                <div class="pad hihat-open-pad b6"></div>
                <div class="pad hihat-open-pad b7"></div>
                <div class="pad hihat-open-pad b8"></div>
                <div class="pad hihat-open-pad b9"></div>
                <div class="pad hihat-open-pad b10"></div>
                <div class="pad hihat-open-pad b11"></div>
                <div class="pad hihat-open-pad b12"></div>
                <div class="pad hihat-open-pad b13"></div>
                <div class="pad hihat-open-pad b14"></div>
                <div class="pad hihat-open-pad b15"></div>
              </div>
            </div>

            <div class="hihat-closed-track">
              <div class="controls">
                <h1> Closed High hat</h1>
                <button data-track="2" class="mute hihat-closed-volume">
                  <i class="fas fa-volume-mute">🔊</i>
                </button>
                <div name="hihat-closed-select" id="hihat-closed-select">
                  <option value="./sounds/2.wav"></option>
                </div>
              </div>
              <div class="hihat-closed">
                <div class="pad hihat-closed-pad b0"></div>
                <div class="pad hihat-closed-pad b1"></div>
                <div class="pad hihat-closed-pad b2"></div>
                <div class="pad hihat-closed-pad b3"></div>
                <div class="pad hihat-closed-pad b4"></div>
                <div class="pad hihat-closed-pad b5"></div>
                <div class="pad hihat-closed-pad b6"></div>
                <div class="pad hihat-closed-pad b7"></div>
                <div class="pad hihat-closed-pad b8"></div>
                <div class="pad hihat-closed-pad b9"></div>
                <div class="pad hihat-closed-pad b10"></div>
                <div class="pad hihat-closed-pad b11"></div>
                <div class="pad hihat-closed-pad b12"></div>
                <div class="pad hihat-closed-pad b13"></div>
                <div class="pad hihat-closed-pad b14"></div>
                <div class="pad hihat-closed-pad b15"></div>
              </div>
            </div>

            <div class="snare-track">
              <div class="controls">
                <h1>Snare</h1>
                <button data-track="3" class="mute snare-volume">
                  <i class="fas fa-volume-mute">🔊</i>
                </button>
                <div name="snare-select" id="snare-select">
                  <option value="./sounds/3.wav"></option>
                </div>
              </div>
              <div class="snare">
                <div class="pad snare-pad b0"></div>
                <div class="pad snare-pad b1"></div>
                <div class="pad snare-pad b2"></div>
                <div class="pad snare-pad b3"></div>
                <div class="pad snare-pad b4"></div>
                <div class="pad snare-pad b5"></div>
                <div class="pad snare-pad b6"></div>
                <div class="pad snare-pad b7"></div>
                <div class="pad snare-pad b8"></div>
                <div class="pad snare-pad b9"></div>
                <div class="pad snare-pad b10"></div>
                <div class="pad snare-pad b11"></div>
                <div class="pad snare-pad b12"></div>
                <div class="pad snare-pad b13"></div>
                <div class="pad snare-pad b14"></div>
                <div class="pad snare-pad b15"></div>
              </div>
            </div>

            <div class="clap-track">
              <div class="controls">
                <h1>Clap</h1>
                <button data-track="4" class="mute clap-volume">
                  <i class="fas fa-volume-mute">🔊</i>
                </button>
                <div name="clap-select" id="clap-select">
                  <option value="./sounds/4.wav"></option>
                </div>
              </div>
              <div class="clap">
                <div class="pad clap-pad b0"></div>
                <div class="pad clap-pad b1"></div>
                <div class="pad clap-pad b2"></div>
                <div class="pad clap-pad b3"></div>
                <div class="pad clap-pad b4"></div>
                <div class="pad clap-pad b5"></div>
                <div class="pad clap-pad b6"></div>
                <div class="pad clap-pad b7"></div>
                <div class="pad clap-pad b8"></div>
                <div class="pad clap-pad b9"></div>
                <div class="pad clap-pad b10"></div>
                <div class="pad clap-pad b11"></div>
                <div class="pad clap-pad b12"></div>
                <div class="pad clap-pad b13"></div>
                <div class="pad clap-pad b14"></div>
                <div class="pad clap-pad b15"></div>
              </div>
            </div>

            <div class="button-container">
              <button class="save">Save</button>
              <button class="play">Play</button>
            </div>
            <div class="arraySync"></div>
          </div>

          <audio class="kick-sound" src="./sounds/0.wav"></audio>
          <audio
            class="snare-sound"
            src="./sounds/3.wav"
          ></audio>
          <audio class="hihat-open-sound" src="./sounds/2.wav"></audio>
          <audio class="clap-sound" src="./sounds/4.wav"></audio>
          <audio class="hihat-closed-sound" src="./sounds/3.wav"></audio>

          <script
            src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/js/all.min.js"
            integrity="sha256-MAgcygDRahs+F/Nk5Vz387whB4kSK9NXlDN3w58LLq0="
            crossorigin="anonymous"
          ></script>
        </body>
      </Styles>
    );
  }
}
