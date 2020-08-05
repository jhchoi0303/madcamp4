import React from "react";
import * as S from "./styles";
import RecordPlayer from "../../component/recordplayer";
import HighMidLow from "../../component/slider";

interface MixerProps {
  position: String;
}

class MixerContainer extends React.Component<MixerProps> {
  constructor(props: MixerProps) {
    super(props);
  }

  render() {
    if (this.props.position == "left") {
      return (
        <S.Section>
          <RecordPlayer></RecordPlayer>
          <HighMidLow></HighMidLow>
        </S.Section>
      );
    }
    if (this.props.position == "right") {
      return (
        <S.Section>
          <HighMidLow></HighMidLow>
          <RecordPlayer></RecordPlayer>
        </S.Section>
      );
    }
  }
}

export default MixerContainer;
