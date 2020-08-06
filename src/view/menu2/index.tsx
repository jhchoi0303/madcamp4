import React from "react";
import Layout from "../../component/layout";
import { STATIC_URL } from "../../constants";
import about from "../../images/about.jpg";
import * as S from "./styles";

const Menu2: React.FC = () => {
  return (
    <Layout>
      <S.Main>
        <S.Section>
          <S.IntroContainer>
            <S.IntroTitle>
              Beat,
              <br />
              Create,
              <br />
              Listen!
            </S.IntroTitle>
            <S.SliderContainer src={about}></S.SliderContainer>
          </S.IntroContainer>
        </S.Section>

        <S.Section>
          <S.ExplanationContainer>
            <S.Title>How to mix</S.Title>
            <S.Explanation>
              First, copy and paste youtube url and click on load. The title of
              the link shows, and the audio, audio wave appears.
              <br></br>
              What you got is a traditional DJ setup : 2 turntables and a mixer.
              <br></br>
              Your mission is to play simultaneously two songs on each turntable
              and to use the mixer to mix them together.
              <br></br>To make it easy, the beats are automatically in sync and
              you can also change the speed of the music by clicking on the bpm
              value on top of the mixer. <br></br>
            </S.Explanation>
          </S.ExplanationContainer>
        </S.Section>
        <S.Section>
          <S.ContentsContainer>
            <S.Content href="http://localhost:3000/madcamp4/menu11">
              <div>
                Make Beat
                <br />
                <S.PrimaryColor></S.PrimaryColor>
              </div>
            </S.Content>
            <S.Content href="http://localhost:3000/madcamp4/menu1">
              <div>
                Go Mix
                <br />
              </div>
            </S.Content>
          </S.ContentsContainer>{" "}
        </S.Section>
        <S.Section></S.Section>
      </S.Main>
    </Layout>
  );
};

export default Menu2;
