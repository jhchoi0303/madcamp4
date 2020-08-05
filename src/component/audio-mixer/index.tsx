import React from "react";
import * as S from "./styles";
import VolumeController from "./volume-controller";
import RecordPlayer from "./record-player";
import AudioFilter from "./audio-filter";

class AudioMixer extends React.Component {
  render() {
    return (
      <S.AudioMixer>
        <RecordPlayer/>
        <AudioFilter></AudioFilter>
        <VolumeController/>
        <AudioFilter></AudioFilter>
        <RecordPlayer/>
      </S.AudioMixer>
    )
  }
}

export default AudioMixer;