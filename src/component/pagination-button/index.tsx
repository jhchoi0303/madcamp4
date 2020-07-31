import React from "react";

import * as S from "./styles";

interface PaginationButtonProps {
  focus?: boolean;
}

const PaginationButton: React.FC<PaginationButtonProps> = ({ focus }) => {
  return (
    <S.PaginationButton focus={focus}>
      <S.PaginationButtonContainer to="/board">1</S.PaginationButtonContainer>
    </S.PaginationButton>
  );
};

export default PaginationButton;
