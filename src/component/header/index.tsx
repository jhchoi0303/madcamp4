import React from "react";

import { STATIC_URL } from "../../constants";

import * as S from "./styles";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <S.Header>
      <S.DesktopLink to="/madcamp4">
        <S.Logo src={STATIC_URL.LOGO} alt="Logo"></S.Logo>
      </S.DesktopLink>
      <S.MobileLink to="/madcamp4">
        <S.MobileLogo src={STATIC_URL.LOGO_WITHOUT_TEXT} alt="Mobile Logo" />
      </S.MobileLink>
      <S.DesktopButtons>
        <S.Option>
          <S.DesktopLink to="/madcamp4/menu1">
            <S.Buttons>메인</S.Buttons>
          </S.DesktopLink>
        </S.Option>
        <S.DesktopLink to="/madcamp4/menu11">
          <S.Buttons>비트찍기</S.Buttons>
        </S.DesktopLink>
        <S.DesktopLink to="/madcamp4/menu2">
          <S.Buttons>도움</S.Buttons>
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

export default Header;
