import React from "react";
import * as S from "./styles";
import Slider from "./Slider";
import App from "./createref";
import Download from "../../view/testDownload/index";

interface PlayerItemProps {
  position: string;
}

const PlayerItem: React.FC<PlayerItemProps> = () => {
  return (
    <S.PlayerItem>
      <S.PlayerUrlContainer>
        <App>
          <div id="audio"></div>
        </App>
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
          <Slider></Slider>
        </S.Slider>
        <S.Slider>
          <Slider></Slider>
        </S.Slider>
        <S.Slider>
          <Slider></Slider>
        </S.Slider>
      </S.SliderContainer>
    </S.PlayerItem>
  );
};

export default PlayerItem;
