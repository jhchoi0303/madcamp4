import React from "react";
import Layout from "../../component/layout";
import { STATIC_URL } from "../../constants";
import PlayerItem from "../../component/player-item";

import * as S from "./styles";

const Menu1: React.FC = () => {
  return (
    <Layout>
      <S.Main>
        <S.PlayerContainer>
          <PlayerItem></PlayerItem>
          <PlayerItem></PlayerItem>
        </S.PlayerContainer>
      </S.Main>
    </Layout>
  );
};

export default Menu1;
