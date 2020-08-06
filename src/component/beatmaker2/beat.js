import React from "react";
import styled from "styled-components";
import DrumKit from "./beatmaker";

const Styles = styled.div`
  .Woojung-pad,
  .Jihyun-pad {
    width: 8rem;
    height: 8rem;
    border: 0.1rem solid;
    border-color: grey;
    cursor: pointer;
  }
  .Woojung {
    /*background: rgb(160, 211, 224);*/
  }

  .Jihyun-pad {
    /*background: rgb(255, 102, 102);*/
  }

  .Woojung-pad.active {
    background: #feda75;
  }

  .Jihyun-pad.active {
    background: #962fbf;
  }

  .sequencer {
    display: flex;
    min-height: 50vh;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }

  .Woojung-track,
  .Jihyun-track {
    display: flex;
    align-items: center;
    width: 70%;
  }
  .Woojung,
  .Jihyun {
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

export default class Beat2 extends React.Component {
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
        if (result_sound.length != 0) preset_info.push(result_sound);
      }
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
            <div class="Woojung-track">
              <div class="controls">
                <h1>Woojung</h1>
                <button data-track="0" class="mute Woojung-volume">
                  <i class="fas fa-volume-mute">🔊</i>
                </button>
                <div name="Woojung-select" id="Woojung-select">
                  <option value="./sounds/Woojung-classic.wav"></option>
                </div>
              </div>
              <div class="Woojung">
                <div class="pad Woojung-pad b0"></div>
                <div class="pad Woojung-pad b1"></div>
                <div class="pad Woojung-pad b2"></div>
                <div class="pad Woojung-pad b3"></div>
                <div class="pad Woojung-pad b4"></div>
                <div class="pad Woojung-pad b5"></div>
                <div class="pad Woojung-pad b6"></div>
                <div class="pad Woojung-pad b7"></div>
                <div class="pad Woojung-pad b8"></div>
                <div class="pad Woojung-pad b9"></div>
                <div class="pad Woojung-pad b10"></div>
                <div class="pad Woojung-pad b11"></div>
                <div class="pad Woojung-pad b12"></div>
                <div class="pad Woojung-pad b13"></div>
                <div class="pad Woojung-pad b14"></div>
                <div class="pad Woojung-pad b15"></div>
              </div>
            </div>

            <div class="Jihyun-track">
              <div class="controls">
                <h1>Jihyun</h1>
                <button data-track="1" class="mute Jihyun-volume">
                  <i class="fas fa-volume-mute">🔊</i>
                </button>
                <div name="Jihyun-select" id="Jihyun-select">
                  <option value="./sounds/Jihyun.wav"></option>
                </div>
              </div>
              <div class="Jihyun">
                <div class="pad Jihyun-pad b0"></div>
                <div class="pad Jihyun-pad b1"></div>
                <div class="pad Jihyun-pad b2"></div>
                <div class="pad Jihyun-pad b3"></div>
                <div class="pad Jihyun-pad b4"></div>
                <div class="pad Jihyun-pad b5"></div>
                <div class="pad Jihyun-pad b6"></div>
                <div class="pad Jihyun-pad b7"></div>
                <div class="pad Jihyun-pad b8"></div>
                <div class="pad Jihyun-pad b9"></div>
                <div class="pad Jihyun-pad b10"></div>
                <div class="pad Jihyun-pad b11"></div>
                <div class="pad Jihyun-pad b12"></div>
                <div class="pad Jihyun-pad b13"></div>
                <div class="pad Jihyun-pad b14"></div>
                <div class="pad Jihyun-pad b15"></div>
              </div>
            </div>

            <div class="button-container">
              <button class="save">Save</button>
              <button class="play">Play</button>
            </div>
            <div class="arraySync"></div>
          </div>

          <audio class="Woojung-sound" src="./sounds/tummy02.wav"></audio>
          <audio class="Jihyun-sound" src="./sounds/tummy01.wav"></audio>

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
