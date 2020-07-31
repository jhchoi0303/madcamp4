import React from "react";

import { STATIC_URL } from "../../constants";

import * as S from "./styles";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <S.Header>
      <S.DesktopLink to="/">
        <S.Logo src={STATIC_URL.LOGO} alt="Logo"></S.Logo>
      </S.DesktopLink>
      <S.MobileLink to="/">
        <S.MobileLogo src={STATIC_URL.LOGO_WITHOUT_TEXT} alt="Mobile Logo" />
      </S.MobileLink>
      <S.DesktopButtons>
        <S.Option>
          <S.Buttons>
            음악<br></br> 제작소<br></br>(공방)
            <S.DropDown>
              <S.DesktopLink to="/menu1">
                <S.Content>메인</S.Content>
              </S.DesktopLink>
              <S.DesktopLink to="/menu11">
                <S.Content>두번째 공방</S.Content>
              </S.DesktopLink>
            </S.DropDown>
          </S.Buttons>
        </S.Option>
        <S.DesktopLink to="/menu2">
          <S.Buttons>앨범</S.Buttons>
        </S.DesktopLink>
        <S.DesktopLink to="/menu3">
          <S.Buttons>커뮤너티(전시회)</S.Buttons>
        </S.DesktopLink>
        <S.DesktopLink to="/menu4">
          <S.Buttons>내 음악</S.Buttons>
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
