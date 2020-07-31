import React from "react";

import * as S from "./styles";

interface BoardItemProps {}

const BoardItem: React.FC<BoardItemProps> = () => {
  return (
    <S.BoardItem>
      <S.BoardItemContainer to="/post">
        <S.BoardItemTitle>게시글의 제목입니다. </S.BoardItemTitle>
        <S.BoardItemMeta>
          좋아요 수, 조회수, 작성자 정보가 들어갈 계획입니다
        </S.BoardItemMeta>
      </S.BoardItemContainer>
    </S.BoardItem>
  );
};

export default BoardItem;
