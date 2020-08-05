import React from "react";
import Layout from "../../component/layout";

import MixerContainer from "../../component/mixercontainer";
import Master from "../../component/slider2";
import * as S from "./styles";

const Menu1: React.FC = () => {
  return (
    <Layout>
      <S.Main>
        <S.PlayerContainer></S.PlayerContainer>

        <S.MixerContainer>
          <MixerContainer position="left"></MixerContainer>
          <Master></Master>
          <MixerContainer position="right"></MixerContainer>
        </S.MixerContainer>
      </S.Main>
    </Layout>
  );
};

export default Menu1;
