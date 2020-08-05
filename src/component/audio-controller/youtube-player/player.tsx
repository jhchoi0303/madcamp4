import React from "react";
import playImg from "../../../images/play-button.png"
import pauseImg from "../../../images/pause.png"

import * as S from './styles'

interface PlayerProps {
  position: String;
}

interface PlayerState {
  playing: Boolean;
}

class Player extends React.Component<PlayerProps> {
  imgRef: React.RefObject<HTMLImageElement>;

  constructor(props: PlayerProps) {
    super(props);

    this.imgRef = React.createRef();
  }

  clickHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (this.imgRef.current?.getAttribute('src') == playImg) {
      this.imgRef.current?.setAttribute('src', pauseImg);
    } else {
      this.imgRef.current?.setAttribute('src', playImg);
    }
  }

  render() {
    return (
      <S.WaveformContainer>
        <S.TitleBox className="title">Load from youtube</S.TitleBox>
        <S.Wave className="waveform"/>
        <S.PlayButton position={this.props.position} className="play-btn" onClick={this.clickHandler}><img src={playImg} ref={this.imgRef}></img></S.PlayButton>
      </S.WaveformContainer>
    )
  }
}

export default Player