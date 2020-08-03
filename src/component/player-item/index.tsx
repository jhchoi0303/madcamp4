import React from "react";
import * as S from "./styles";
import Slider from "./Slider";
interface PlayerItemProps {}

const PlayerItem: React.FC<PlayerItemProps> = () => {
  return (
    <S.PlayerItem>
      <S.PlayerUrlContainer>
        <S.PlayerUrl>URL을 입력해주세오</S.PlayerUrl>
        <S.PlayerButton></S.PlayerButton>
      </S.PlayerUrlContainer>

      <S.PlayerInfo>
        <S.PlayerInfoText>
          <S.PlayerTitle>곡명은 여기에 온다</S.PlayerTitle>
          <S.PlayerTime>곡 길이는 여기에 온다</S.PlayerTime>
        </S.PlayerInfoText>
        <S.PlayerWavForm></S.PlayerWavForm>
      </S.PlayerInfo>

      <Slider></Slider>
    </S.PlayerItem>
  );
};

export default PlayerItem;
