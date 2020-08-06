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
            <S.Text>
              <S.Title>maDDDDDj</S.Title>
              <S.Content>Ultimate online DJ mixer</S.Content>
            </S.Text>
          </S.RecordPlayer>
        </S.Section>
      </S.Main>
    </Layout>
  );
};

export default Main;
