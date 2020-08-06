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
        <S.CueTitle>CUE</S.CueTitle>
        <S.CueSide>
          <Cue number={6}/>
          <Cue number={7}/>
          <Cue number={8}/>
          <Cue number={9}/>
          <Cue number={0}/>
        </S.CueSide>
      </S.CueArea>
    )
  }
}

export default CueArea