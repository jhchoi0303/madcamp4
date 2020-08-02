import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

interface AudioProps {
  title: string,
  email: string,
  url: string
}

interface AudioState {
  playState: Boolean
}

class Download extends React.Component<RouteComponentProps<AudioProps>, AudioState> {
  constructor(props: RouteComponentProps<AudioProps>) {
    super(props);

    this.state = { playState: false };
    this.startAudioFilter = this.startAudioFilter.bind(this);
  }

  componentDidMount() {
    const { title, email, url } = this.props.match.params;

    if (url == null) {
      this.getAudioByTitle(title, email);
    } else {
      this.getAudioByUrl(url);
    }

    this.startAudioFilter();
  }

  getAudioByTitle(title: string, email: string) {
    const request = new XMLHttpRequest();
    request.open("GET", `/api/youtube/download?title=${title}&email=${email}`, true);
    request.responseType = "blob";
    request.onload = function () {
      if (this.status == 200) {
        const audio: HTMLAudioElement | null = document.querySelector('#audio');

        if (audio != null) {
          audio.setAttribute('src', URL.createObjectURL(this.response));
          audio.load();
          alert("Loading success");
        }
      }
    }
    request.send();
  }

  getAudioByUrl(url: string) {
    const request = new XMLHttpRequest();
    request.open("GET", `/api/youtube/download?url=${url}`, true);
    request.responseType = "blob";
    request.onload = function () {
      if (this.status == 200) {
        const audio: HTMLAudioElement | null = document.querySelector('#audio');

        if (audio != null) {
          audio.setAttribute('src', URL.createObjectURL(this.response));
          audio.load();
          alert("Loading success");
        }
      }
    }
    request.send();
  }

  startAudioFilter() {
    const audioElem: HTMLAudioElement | null = document.querySelector('#audio');
    if (audioElem == null)
      return;

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
    biquadFilterHigh.gain.value = 0;
    biquadFilterMiddle.gain.value = 0;
    biquadFilterLow.gain.value = 0;

    audioSourceNode
      .connect(analyser)
      .connect(biquadFilterHigh)
      .connect(biquadFilterMiddle)
      .connect(biquadFilterLow)
      .connect(gainNode)
      .connect(audioDestination);
    
    document.querySelector('#high')?.addEventListener('click', (ev) => {
      biquadFilterHigh.gain.value = 5;
      biquadFilterMiddle.gain.value = 0;
      biquadFilterLow.gain.value = 0;
    })
    document.querySelector('#middle')?.addEventListener('click', (ev) => {
      biquadFilterHigh.gain.value = 0;
      biquadFilterMiddle.gain.value = 5;
      biquadFilterLow.gain.value = 0;
    })
    document.querySelector('#low')?.addEventListener('click', (ev) => {
      biquadFilterHigh.gain.value = 0;
      biquadFilterMiddle.gain.value = 0;
      biquadFilterLow.gain.value = 5;
    })
    document.querySelector('#play')?.addEventListener('click', (ev) => {
      audioContext.resume().then(() => {
        const playState = !this.state.playState
        this.setState({ playState: playState })

        if (playState) {
            audioElem.play();
        } else {
            audioElem.pause();
        }
      });
    })
  }

  render() {
    return (
      <React.Fragment>
        <audio id="audio" controls loop></audio>

        <button id="play">재생</button>
        <button id="high">고음</button>
        <button id="middle">중음</button>
        <button id="low">저음</button>
        <button id="original">초기화</button>
      </React.Fragment>
    )
  }
}

export default Download;