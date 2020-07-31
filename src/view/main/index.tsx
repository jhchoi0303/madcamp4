import React from "react";
import Layout from "../../component/layout";
import { STATIC_URL } from "../../constants";

import * as S from "./styles";

const Main: React.FC = () => {
  return (
    <Layout>
      <S.Main>
        <S.Section>이곳은 메인</S.Section>
      </S.Main>
    </Layout>
  );
};

export default Main;
