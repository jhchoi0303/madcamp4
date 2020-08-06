class DrumKit {
  constructor() {
    this.pads = document.querySelectorAll(".pad");
    this.saveBtn = document.querySelector(".save");
    this.playBtn = document.querySelector(".play");
    this.arraySync = document.querySelector(".arraySync");
    this.currentKick = "./sounds/kick-classic.wav";
    this.currentSnare = "./sounds/snare-acoustic01.wav";
    this.currentHihat = "./sounds/openhighhat.wav";
    this.currentClap = "./sounds/clap.wav";
    this.currentHighhat = "./sounds/closedhighhat.wav";
    this.kickAudio = document.querySelector(".kick-sound");
    this.snareAudio = document.querySelector(".snare-sound");
    this.hihatAudio = document.querySelector(".hihat-sound");
    this.clapAudio = document.querySelector(".clap-sound");
    this.highhatAudio = document.querySelector(".highhat-sound");
    this.index = 0;
    this.bpm = 150;
    this.isPlaying = null;
    this.selects = document.querySelectorAll("select");
    this.muteBtns = document.querySelectorAll(".mute");
  }
  activePad() {
    this.classList.toggle("active");
  }
  arrayCheck() {
    if (this.classList.contains("kick-pad")) {
      var kickAudio = new Audio("./sounds/kick-classic.wav");
      kickAudio.play();
    }
  }
  saveSounds() {
    let arr = new Array();
    let step = this.index++ % 16;
    const bar = document.querySelector(`.b${step}`);
    if (bar.classList.contains("active")) {
      if (bar.classList.contains("kick-pad")) {
        arr = [0, step * 0.0625];
      }
    }

    return arr;
  }

  clickSounds() {
    if (this.classList.contains("kick-pad")) {
      var kickAudio = new Audio("./sounds/kick-classic.wav");
      kickAudio.play();
    }
    if (this.classList.contains("snare-pad")) {
      var snareAudio = new Audio("./sounds/snare-acoustic01.wav");
      snareAudio.play();
    }
    if (this.classList.contains("hihat-pad")) {
      var hihatAudio = new Audio("./sounds/openhighhat.wav");
      hihatAudio.play();
    }
    if (this.classList.contains("clap-pad")) {
      var clapAudio = new Audio("./sounds/clap.wav");
      clapAudio.play();
    }
    if (this.classList.contains("highhat-pad")) {
      var highhatAudio = new Audio("./sounds/closedhighhat.wav");
      highhatAudio.play();
    }
  }
  repeat() {
    let step = this.index % 16;
    const activeBars = document.querySelectorAll(`.b${step}`);
    //Loop over the pads
    activeBars.forEach((bar) => {
      bar.style.animation = `playTrack 0.3s alternate ease-in-out 2`;
      if (bar.classList.contains("active")) {
        if (bar.classList.contains("kick-pad")) {
          this.kickAudio.currentTime = 0;
          this.kickAudio.play();
        }
        if (bar.classList.contains("snare-pad")) {
          this.snareAudio.currentTime = 0;
          this.snareAudio.play();
        }
        if (bar.classList.contains("hihat-pad")) {
          this.hihatAudio.currentTime = 0;
          this.hihatAudio.play();
        }
        if (bar.classList.contains("clap-pad")) {
          this.clapAudio.currentTime = 0;
          this.clapAudio.play();
        }
        if (bar.classList.contains("highhat-pad")) {
          this.highhatAudio.currentTime = 0;
          this.highhatAudio.play();
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
      case "kick-select":
        this.kickAudio.src = selectionValue;
        break;
      case "snare-select":
        this.snareAudio.src = selectionValue;
        break;
      case "hihat-select":
        this.hihatAudio.src = selectionValue;
        break;
      case "clap-select":
        this.clapAudio.src = selectionValue;
      case "highhat-select":
        this.highhatAudio.src = selectionValue;
    }
  }
  mute(e) {
    const muteIndex = e.target.getAttribute("data-track");
    e.target.classList.toggle("active");
    if (e.target.classList.contains("active")) {
      switch (muteIndex) {
        case "0":
          this.kickAudio.volume = 0;
          break;
        case "1":
          this.hihatAudio.volume = 0;
          break;
        case "2":
          this.snareAudio.volume = 0;
          break;
        case "3":
          this.clapAudio.volume = 0;
          break;
        case "4":
          this.highhatAudio.volume = 0;
          break;
      }
    } else {
      switch (muteIndex) {
        case "0":
          this.kickAudio.volume = 1;
          break;
        case "1":
          this.snareAudio.volume = 1;
          break;
        case "2":
          this.hihatAudio.volume = 1;
          break;
        case "3":
          this.clapAudio.volume = 1;
          break;
        case "4":
          this.highhatAudio.volume = 1;
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
