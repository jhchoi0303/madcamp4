import React from "react";
import Layout from "../../component/layout";
// import PlayerItem from "../../component/player-item";
import AudioController from "../../component/audio-controller"

import * as S from "./styles";

const Menu1: React.FC = () => {
  return (
    <Layout>
      <S.Main>
        <S.PlayerContainer>
          {/* <PlayerItem position="left"></PlayerItem>
          <PlayerItem position="right"></PlayerItem> */}
          <AudioController></AudioController>
        </S.PlayerContainer>
      </S.Main>
    </Layout>
  );
};

export default Menu1;
