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
          <S.RecordPlayer>
            <S.ImageContainer>
              <S.Image src={record}></S.Image>
            </S.ImageContainer>
            <S.Text>소개</S.Text>
          </S.RecordPlayer>
        </S.Section>
      </S.Main>
    </Layout>
  );
};

export default Main;
