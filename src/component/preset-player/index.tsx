import React from "react";
import * as S from "./styles";

import PresetPlayBtn from "./preset-play-btn";

class PresetPlayer extends React.Component {
  render() {
    return(
      <S.PresetPlayer>
        <PresetPlayBtn/>
      </S.PresetPlayer>
    );
  }
}

export default PresetPlayer;