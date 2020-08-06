import React from "react";
import Layout from "../../component/layout";
import { STATIC_URL } from "../../constants";
import BeatItem2 from "../../component/beatmaker2";
import * as S from "./styles";
import AudioHeader from "../../component/audio-header";
const Menu111: React.FC = () => {
  return (
    <Layout>
      <S.Main>
        <AudioHeader></AudioHeader>
        <S.Section>
          <BeatItem2></BeatItem2>
        </S.Section>
      </S.Main>
    </Layout>
  );
};

export default Menu111;
