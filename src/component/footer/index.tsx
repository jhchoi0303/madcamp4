import React from "react";

import * as S from "./styles";

const Footer = () => {
  return (
    <S.Footer>
      <S.FooterContainer>
        <S.FooterComponent to="/member">회원</S.FooterComponent>
        <S.FooterComponent to="/board">게시판</S.FooterComponent>
        <S.FooterComponent to="/archieve">자료실</S.FooterComponent>
      </S.FooterContainer>
    </S.Footer>
  );
};

export default Footer;
