import React from "react"
import * as S from "./styles"

interface CueProps {
  number: Number;
}

class Cue extends React.Component<CueProps> {
  constructor(props: CueProps) {
    super(props);
  }

  render() {
    return(
      <S.Cue>{this.props.number}</S.Cue>
    )
  }
}

export default Cue;