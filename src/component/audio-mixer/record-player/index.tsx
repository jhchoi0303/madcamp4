import React from "react";
import * as S from "./styles";
import record from "../../../images/record.png";

interface RecordPlayerProps {}

const RecordPlayer: React.FC<RecordPlayerProps> = () => {
  return (
    <S.ImageContainer>
      <S.Image className="record" src={record}></S.Image>
    </S.ImageContainer>
  );
};

export default RecordPlayer;
