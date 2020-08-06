import React, { useState, useEffect } from "react";
import Layout from "../../component/layout";
import AudioController from "../../component/audio-controller";
import AudioMixer from "../../component/audio-mixer";

import * as S from "./styles";

import initAudio from "./audio"

import cookies from 'react-cookies'

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
          <button onClick={play_preset}>preset</button>
        </S.PlayerContainer>
      </S.Main>
    </Layout>
  );
};

function play_preset(): void
{
  console.log(cookies.load('preset_info'))
  return;
}

export default Menu1;
