import React from "react"
import * as S from "./styles"

interface BeatCheckerProps {
}

class BeatChecker extends React.Component<BeatCheckerProps> {
  constructor(props: BeatCheckerProps) {
    super(props);
  }

  render() {
    return (
      <S.BeatChecker>
        <div id="bpm-box">- bpm</div>
        <span></span>
      </S.BeatChecker>
    )
  }
}

export default BeatChecker;