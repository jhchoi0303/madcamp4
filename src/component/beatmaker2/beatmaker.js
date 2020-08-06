class DrumKit {
  constructor() {
    this.pads = document.querySelectorAll(".pad");
    this.saveBtn = document.querySelector(".save");
    this.playBtn = document.querySelector(".play");
    this.arraySync = document.querySelector(".arraySync");
    this.currentWoojung = "./sounds/tummy02.wav";
    this.currentJihyun = "./sounds/tummy01.wav";

    this.WoojungAudio = document.querySelector(".Woojung-sound");
    this.JihyunAudio = document.querySelector(".Jihyun-sound");

    this.index = 0;
    this.bpm = 300;
    this.isPlaying = null;
    this.selects = document.querySelectorAll("select");
    this.muteBtns = document.querySelectorAll(".mute");
  }
  activePad() {
    this.classList.toggle("active");
  }
  arrayCheck() {
    if (this.classList.contains("Woojung-pad")) {
      var WoojungAudio = new Audio("./sounds/tummy02.wav");
      WoojungAudio.play();
    }
  }
  saveSounds() {
    let arr = new Array();
    let step = this.index++ % 16;
    const bar = document.querySelectorAll(`.b${step}`);
    for (var i = 0; i < bar.length; i++) {
      if (bar[i].classList.contains("active")) {
        if (bar[i].classList.contains("Woojung-pad")) {
          arr.push([0, step * 0.0625]);
        } else if (bar[i].classList.contains("Jihyun-pad")) {
          arr.push([1, step * 0.0625]);
        }
      }
      return arr;
    }
  }

  clickSounds() {
    if (this.classList.contains("Woojung-pad")) {
      var WoojungAudio = new Audio("./sounds/tummy02.wav");
      WoojungAudio.play();
    }
    if (this.classList.contains("Jihyun-pad")) {
      var JihyunAudio = new Audio("./sounds/tummy01.wav");
      JihyunAudio.play();
    }
  }
  repeat() {
    let step = this.index % 16;
    const activeBars = document.querySelectorAll(`.b${step}`);
    //Loop over the pads
    activeBars.forEach((bar) => {
      bar.style.animation = `playTrack 1s alternate ease-in-out 0.1`;
      if (bar.classList.contains("active")) {
        if (bar.classList.contains("Woojung-pad")) {
          this.WoojungAudio.currentTime = 0;
          this.WoojungAudio.play();
        }
        if (bar.classList.contains("Jihyun-pad")) {
          this.JihyunAudio.currentTime = 0;
          this.JihyunAudio.play();
        }
      }
    });
    this.index++;
  }

  start() {
    const interval = (60 / this.bpm) * 1000;
    //Check if it's playing

    if (this.isPlaying) {
      //Clear the interval
      clearInterval(this.isPlaying);
      this.isPlaying = null;
    } else {
      this.isPlaying = setInterval(() => {
        this.repeat();
      }, interval);
    }
  }

  updateBtn() {
    if (!this.isPlaying) {
      this.playBtn.innerText = "Stop";
      this.playBtn.classList.add("active");
    } else {
      this.playBtn.innerText = "Play";
      this.playBtn.classList.remove("active");
    }
  }

  saveSync() {
    this.saveSounds();
  }
  changeSound(e) {
    const selectionName = e.target.name;
    const selectionValue = e.target.value;
    switch (selectionName) {
      case "Woojung-select":
        this.WoojungAudio.src = selectionValue;
        break;
      case "Jihyun-select":
        this.JihyunAudio.src = selectionValue;
        break;
    }
  }
  mute(e) {
    const muteIndex = e.target.getAttribute("data-track");
    e.target.classList.toggle("active");
    if (e.target.classList.contains("active")) {
      switch (muteIndex) {
        case "0":
          this.WoojungAudio.volume = 0;
          break;
        case "1":
          this.JihyunAudio.volume = 0;
          break;
      }
    } else {
      switch (muteIndex) {
        case "0":
          this.WoojungAudio.volume = 2;
          break;
        case "1":
          this.JihyunAudio.volume = 2;
          break;
      }
    }
  }
  changeTempo(e) {
    const tempoText = document.querySelector(".tempo-nr");

    tempoText.innerText = e.target.value;
  }
  updateTempo(e) {
    this.bpm = e.target.value;
    clearInterval(this.isPlaying);
    this.isPlaying = null;
    const playBtn = document.querySelector(".play");
    if (playBtn.classList.contains("active")) {
      this.start();
    }
  }
}

export default DrumKit;
