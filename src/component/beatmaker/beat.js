import React from "react";
import styled from "styled-components";
import DrumKit from "./beatmaker";

const Styles = styled.div`
  .kick-pad,
  .snare-pad,
  .hihat-pad {
    width: 5rem;
    height: 5rem;
    margin: 1rem 0.5rem;
    cursor: pointer;
  }
  .kick-pad {
    background: rgb(160, 211, 224);
  }
  .snare-pad {
    background: rgb(224, 160, 208);
  }
  .hihat-pad {
    background: rgb(224, 194, 160);
  }
  .kick-pad.active {
    background: rgb(59, 197, 231);
  }
  .snare-pad.active {
    background: rgb(218, 58, 178);
  }
  .hihat-pad.active {
    background: rgb(241, 158, 64);
  }

  .sequencer {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .hihat-track,
  .snare-track,
  .kick-track {
    display: flex;
    align-items: center;
    width: 70%;
    justify-content: space-between;
    margin-top: 5rem;
  }
  .kick,
  .snare,
  .hihat {
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
    margin-right: 30px;
    width: 60px;
  }
`;

export default class Beat extends React.Component {
  componentDidMount() {
    const drumKit = new DrumKit();

    //Event Listeners
    drumKit.pads.forEach((pad) => {
      pad.addEventListener("click", drumKit.activePad);
      pad.addEventListener("animationend", function () {
        this.style.animation = "";
      });
    });

    drumKit.playBtn.addEventListener("click", function () {
      drumKit.updateBtn();
      drumKit.start();
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
                  <i class="fas fa-volume-mute"></i>
                </button>
                <select name="kick-select" id="kick-select">
                  <option value="./sounds/kick-classic.wav">
                    Classic Kick
                  </option>
                  <option value="./sounds/kick-808.wav">808 Kick</option>
                  <option value="./sounds/kick-heavy.wav">Kick Heavy</option>
                  <option value="./sounds/kick-softy.wav">Kick Softy</option>
                </select>
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
              </div>
            </div>
            <div class="snare-track">
              <div class="controls">
                <h1>Snare</h1>
                <button data-track="1" class="mute snare-volume">
                  <i class="fas fa-volume-mute"></i>
                </button>
                <select name="snare-select" id="snare-select">
                  <option value="./sounds/snare-acoustic01.wav">
                    Classic Snare
                  </option>
                  <option value="./sounds/snare-808.wav">808 Snare</option>
                  <option value="./sounds/snare-vinyl02.wav">
                    Snare Vinyl
                  </option>
                </select>
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
              </div>
            </div>
            <div class="hihat-track">
              <div class="controls">
                <h1>Hihat</h1>
                <button data-track="2" class="mute hihat-volume">
                  <i class="fas fa-volume-mute"></i>
                </button>
                <select name="hihat-select" id="hihat-select">
                  <option value="./sounds/hihat-acoustic01.wav">
                    Hihat Acoustic
                  </option>
                  <option value="./sounds/hihat-808.wav">808 Hihat</option>
                </select>
              </div>
              <div class="hihat">
                <div class="pad hihat-pad b0"></div>
                <div class="pad hihat-pad b1"></div>
                <div class="pad hihat-pad b2"></div>
                <div class="pad hihat-pad b3"></div>
                <div class="pad hihat-pad b4"></div>
                <div class="pad hihat-pad b5"></div>
                <div class="pad hihat-pad b6"></div>
                <div class="pad hihat-pad b7"></div>
              </div>
            </div>
            <button class="play">Play</button>
          </div>

          <audio class="kick-sound" src="./sounds/kick-classic.wav"></audio>
          <audio
            class="snare-sound"
            src="./sounds/snare-acoustic01.wav"
          ></audio>
          <audio
            class="hihat-sound"
            src="./sounds/hihat-acoustic01.wav"
          ></audio>

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
