import React, { useState, useEffect } from "react";
import Layout from "../../component/layout";
import AudioController from "../../component/audio-controller";
import AudioMixer from "../../component/audio-mixer";
import CueArea from "../../component/cue-area";

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
          <AudioController/>
          <AudioMixer/>
          <CueArea/>
        </S.PlayerContainer>
      </S.Main>
    </Layout>
  );
};

export default Menu1;
