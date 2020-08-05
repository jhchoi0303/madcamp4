import WaveSurfer from 'wavesurfer.js';

const waveformList: (WaveSurfer | null)[] = [null, null];

function initAudio() {
  initAudioPlayer();
  initBeatChecker();
  initUrlInputBox();
}

function initAudioPlayer() {
  const playButtonList = document.querySelectorAll('.play-btn') as NodeListOf<HTMLAudioElement>;

  for (let i = 0; i < 2; i++) {
    const playButtonElem = playButtonList[i];
    const waveformID = "waveform-" + i.toString();

    /* Make waveform */
    waveformList[i] = WaveSurfer.create({
      container: '#' + waveformID,
      barWidth: 3,
      cursorWidth: 1,
      backend: 'MediaElement',
      height: 120,
      progressColor: '#2D5BFF',
      responsive: true,
      waveColor: '#EFEFEF',
      cursorColor: 'transparent',
    });
    
    /* Init play button */
    playButtonElem.addEventListener('click', (ev) => {
      waveformList[i]?.playPause();
    });
  }
}

function initBeatChecker() {

}

function initUrlInputBox() {
  const inputList = document.querySelectorAll('.url-box > input') as NodeListOf<HTMLInputElement>;
  const buttonList = document.querySelectorAll('.url-box > button') as NodeListOf<HTMLButtonElement>;

  for(let i = 0; i < 2; i++) {
    const inputElem = inputList[i];
    const buttonElem = buttonList[i];

    buttonElem.addEventListener('click', (ev) => {
      /* Load audio from a server */
      const requestAudio = new XMLHttpRequest();
      requestAudio.open("GET", `/api/youtube/download?url=${inputElem.value}`, true);
      requestAudio.responseType = "blob";
      requestAudio.onload = () => {
        if (requestAudio.status === 200) {
          waveformList[i]?.load(URL.createObjectURL(requestAudio.response));
          /* Attach audio filter */
          attachFilter(i);
        } else {
          alert("Check url");
        }
      };
      requestAudio.send();

      /* Load audio meta data from a server */

      
    });
  }
}

function attachFilter(index: number) {
  let audioElem = document.querySelectorAll('.waveform audio')[index] as HTMLAudioElement;
  const sliderElemList = document.querySelectorAll('.slider') as NodeListOf<HTMLInputElement>;

  if (audioElem == null) {
    index = 0;
    audioElem = document.querySelectorAll('.waveform audio')[index] as HTMLAudioElement;
  }

  let sliderIndex = index * 3;

  console.log(document.querySelectorAll('.waveform audio'))
  console.log(index);
  
  const audioContext = new AudioContext();
  const audioDestination = audioContext.destination;
  const audioSourceNode = audioContext.createMediaElementSource(audioElem);
  const analyser = audioContext.createAnalyser();
  const biquadFilterHigh = audioContext.createBiquadFilter();
  const biquadFilterMiddle = audioContext.createBiquadFilter();
  const biquadFilterLow = audioContext.createBiquadFilter();
  const gainNode = audioContext.createGain();
  
  /* Biquad filter */
  /* freq: 0 ~ 24000 */
  /* gain: -3.4e+38 ~ 1541.27 */
  biquadFilterHigh.type = 'highshelf';
  biquadFilterMiddle.type = 'peaking';
  biquadFilterLow.type = 'lowshelf';
  biquadFilterHigh.frequency.value = 3200.0;
  biquadFilterMiddle.frequency.value = 1000.0;
  biquadFilterLow.frequency.value = 320.0;
  biquadFilterHigh.gain.value = parseInt(sliderElemList[sliderIndex].value);
  biquadFilterMiddle.gain.value = parseInt(sliderElemList[sliderIndex + 1].value);
  biquadFilterLow.gain.value = parseInt(sliderElemList[sliderIndex + 2].value);
  
  audioSourceNode
  .connect(analyser)
  .connect(biquadFilterHigh)
  .connect(biquadFilterMiddle)
  .connect(biquadFilterLow)
  .connect(gainNode)
  .connect(audioDestination);
  
  sliderElemList[sliderIndex].addEventListener('change',(ev) => {
    const element = ev.target as HTMLInputElement;
    
    if (element != null) {
      biquadFilterHigh.gain.value = parseInt(element.value);
    }
  });
  sliderElemList[sliderIndex + 1].addEventListener('change', (ev) => {
    const element = ev.target as HTMLInputElement;
    
    if (element != null) {
      biquadFilterMiddle.gain.value = parseInt(element.value);
    }
  });
  sliderElemList[sliderIndex + 2].addEventListener('change', (ev) => {
    const element = ev.target as HTMLInputElement;
    
    if (element != null) {
      biquadFilterLow.gain.value = parseInt(element.value);
    }
  });
}
  
export default initAudio;