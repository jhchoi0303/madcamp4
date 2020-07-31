import React from "react";
import Layout from "../../component/layout";
import { STATIC_URL } from "../../constants";

import * as S from "./styles";

const Menu1: React.FC = () => {
  return (
    <Layout>
      <S.Main>
        <S.Section>이곳은 메뉴1</S.Section>
      </S.Main>
    </Layout>
  );
};

export default Menu1;
