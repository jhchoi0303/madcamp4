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
          <S.Buttons>
            음악 제작소
            <S.DropDown>
              <S.DesktopLink to="/madcamp4/menu1">
                <S.Content>메인</S.Content>
              </S.DesktopLink>
              <S.DesktopLink to="/madcamp4/menu11">
                <S.Content>비트 찍기</S.Content>
              </S.DesktopLink>
            </S.DropDown>
          </S.Buttons>
        </S.Option>
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
