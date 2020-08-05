import React from "react";
import * as S from "./styles";

import WaveSurfer from "wavesurfer.js"

import YoutubePlayer from "./youtube-player"
import BeatChecker from "./beat-checker"
import { request } from "https";

interface AudioControllerProps {

}

interface AudioControllerState {
  playState: Boolean[];
}

class AudioController extends React.Component<AudioControllerProps, AudioControllerState> {
  constructor(props: AudioControllerProps) {
    super(props);

    this.state = {
      playState: [false, false],
    };
  }

  componentDidMount() {
    /* Set id of waveform div elements */
    const waveDivList = document.querySelectorAll('.waveform');
    for (let i = 0; i < 2; i++) {
      waveDivList[i].setAttribute('id', "waveform-" + i.toString());
    }
  }

  render() {
    return (
      <S.AudioController>
        <YoutubePlayer position="left"></YoutubePlayer>
        <BeatChecker></BeatChecker>
        <YoutubePlayer position="right"></YoutubePlayer>
      </S.AudioController>
    )
  }
}

export default AudioController