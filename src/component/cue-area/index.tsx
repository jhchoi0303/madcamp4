import React from "react";
import * as S from "./styles";
import Cue from "./cue";

class CueArea extends React.Component {
  render() {
    return(
      <S.CueArea>
        <S.CueSide>
          <Cue number={1}/>
          <Cue number={2}/>
          <Cue number={3}/>
          <Cue number={4}/>
          <Cue number={5}/>
        </S.CueSide>
        <S.CueSide>
          <Cue number={1}/>
          <Cue number={2}/>
          <Cue number={3}/>
          <Cue number={4}/>
          <Cue number={5}/>
        </S.CueSide>
      </S.CueArea>
    )
  }
}

export default CueArea