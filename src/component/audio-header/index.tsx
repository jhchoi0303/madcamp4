import React from "react";

import { STATIC_URL } from "../../constants";

import * as S from "./styles";

interface AudioHeaderProps {}

const AudioHeader: React.FC<AudioHeaderProps> = () => {
  return (
    <S.Header>
      <S.DesktopButtons>
        <S.DesktopLink to="/madcamp4/menu11">
          <S.Buttons>Original</S.Buttons>
        </S.DesktopLink>
        <S.DesktopLink to="/madcamp4/menu111">
          <S.Buttons>Tummy</S.Buttons>
        </S.DesktopLink>
      </S.DesktopButtons>
      <S.MobileButtons>
        <S.Buttons>
          <img src={STATIC_URL.MEMBER_ICON} alt="Member Icon" />
        </S.Buttons>
      </S.MobileButtons>
    </S.Header>
  );
};

export default AudioHeader;
