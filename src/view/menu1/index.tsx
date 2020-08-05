import React, { useState, useEffect } from "react";
import Layout from "../../component/layout";
import AudioController from "../../component/audio-controller";

import MixerContainer from "../../component/mixercontainer";
import Master from "../../component/slider2";
import * as S from "./styles";

import initAudio from "./audio"

let startIndicator = 0;

const Menu1: React.FC = () => {
  React.useEffect(() => {
    if (startIndicator == 0) {
      initAudio();
      startIndicator = 1;
    }
  })
  return (
    <Layout>
      <S.Main>
        <S.PlayerContainer>
          <AudioController></AudioController>

          <S.MixerContainer>
            <MixerContainer position="left"></MixerContainer>
            <Master></Master>
            <MixerContainer position="right"></MixerContainer>
          </S.MixerContainer>
        </S.PlayerContainer>
      </S.Main>
    </Layout>
  );
};

export default Menu1;
