import React from "react";

import * as S from "./styles";

import BoardItem from "../../component/board-item";

interface BoardListProps {}

const BoardList: React.FC<BoardListProps> = () => {
  return (
    <S.BoardList>
      <BoardItem />
      <BoardItem />
      <BoardItem />
      <BoardItem />
      <BoardItem />
    </S.BoardList>
  );
};

export default BoardList;
