import React from "react";
import Layout from "../../component/layout";
import { STATIC_URL } from "../../constants";
import record from "../../images/record.png";
import * as S from "./styles";

const Main: React.FC = () => {
  return (
    <Layout>
      <S.Main>
        <S.Section>
          <S.ImageContainer>
            <S.Image src={record}></S.Image>
          </S.ImageContainer>
        </S.Section>
      </S.Main>
    </Layout>
  );
};

export default Main;
