import React from "react";
import * as S from "./styles";
import Slider from "./Slider";
import UrlInputBox from "./url-input-box";

interface PlayerItemProps {
  position: String;
}
interface PlayerItemState {
  playState: Boolean;
}

class PlayerItem extends React.Component<PlayerItemProps, PlayerItemState> {
  constructor(props: PlayerItemProps) {
    super(props);

    this.state = {
      playState: false,
    };
    this.startAudioFilter = this.startAudioFilter.bind(this);
  }

  componentDidMount() {
    console.log("hello playerItem");
    this.startAudioFilter()
  }

  startAudioFilter() {
    const audioElemList: NodeListOf<HTMLAudioElement> = document.querySelectorAll('.audio');
    if (audioElemList == null)
      return;
    
    const sliderElemList: NodeListOf<HTMLInputElement> = document.querySelectorAll('.slider');
    const playBtnList = document.querySelectorAll('.play-btn');

    let index: number = 0;
    let sliderIndex: number = 0;
    if (this.props.position == "right") {
      index = 1;
      sliderIndex = 3;
    }

    const audioElem = audioElemList[index];

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
    playBtnList[index].addEventListener('click', (ev) => {
      audioContext.resume().then(() => {
        const playState = !this.state.playState;
        this.setState({ playState: playState });

        if (playState) {
            audioElem.play();
        } else {
            audioElem.pause();
        }
      });
    });
  }

  render() {
    return (
      <S.PlayerItem>
        <S.PlayerUrlContainer>
          <UrlInputBox position={this.props.position}></UrlInputBox>
        </S.PlayerUrlContainer>

        <S.PlayerInfo>
          <S.PlayerInfoText>
            <S.PlayerTitle>곡명은 여기에 온다</S.PlayerTitle>
            <S.PlayerTime>곡 길이는 여기에 온다</S.PlayerTime>
          </S.PlayerInfoText>
          <S.PlayerWavForm></S.PlayerWavForm>
        </S.PlayerInfo>

        <S.SliderContainer>
          <S.Slider>
            <Slider color="#eeeeee" opacity="0.1"></Slider>
          </S.Slider>
          <S.Slider>
            <Slider color="#eeeeee" opacity="0.1"></Slider>
          </S.Slider>
          <S.Slider>
            <Slider color="#eeeeee" opacity="0.1"></Slider>
          </S.Slider>
        </S.SliderContainer>
      </S.PlayerItem>
    );
  }
}

export default PlayerItem;
