import React from "react";
import WaveSurfer from 'wavesurfer.js'

import * as S from './styles'

interface PlayerProps {
  position: String;
}

interface PlayerState {
  playing: Boolean;
}

class Player extends React.Component<PlayerProps> {
  constructor(props: PlayerProps) {
    super(props);
  }

  render() {
    return (
      <S.WaveformContainer>
        <S.Wave className="waveform"/>
        <S.PlayButton position={this.props.position} className="play-btn"/>
      </S.WaveformContainer>
    )
  }
}

export default Player