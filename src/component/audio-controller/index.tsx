import React from "react";
import * as S from "./styles";

import YoutubePlayer from "./youtube-player"
import BeatChecker from "./beat-checker"

interface AudioControllerProps {

}

interface AudioControllerState {

}

class AudioController extends React.Component<AudioControllerProps, AudioControllerState> {
  constructor(props: AudioControllerProps) {
    super(props);
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