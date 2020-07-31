import React from "react";

import * as S from "./styles";

import PaginationButton from "../../component/pagination-button";

interface PaginationBarProps {}

const PaginationBar: React.FC<PaginationBarProps> = () => {
  return (
    <S.PaginationBar>
      <S.ArrowBlock>
        <S.Arrow className="left"></S.Arrow>
      </S.ArrowBlock>
      <S.Buttons>
        <PaginationButton focus={true} />
        <PaginationButton />
        <PaginationButton />
        <PaginationButton />
        <PaginationButton />
      </S.Buttons>
      <S.ArrowBlock>
        <S.Arrow className="right"></S.Arrow>
      </S.ArrowBlock>
    </S.PaginationBar>
  );
};

export default PaginationBar;
