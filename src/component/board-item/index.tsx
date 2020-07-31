import React from "react";
import * as S from "./styles";

interface BoardItemProps {}

const BoardItem: React.FC<BoardItemProps> = () => {
  return (
    <S.BoardItem>
      <S.BoardItemContainer to="/madcamp4/post">
        <S.BoardItemTitle>노래 제목</S.BoardItemTitle>
        <S.BoardItemContent>
          <S.BoardItemImage></S.BoardItemImage>
          <S.BoardItemMeta>
            <S.BoardItemLike>좋아요 수</S.BoardItemLike>
            <S.BoardItemViews>조회수</S.BoardItemViews>
            <S.BoardItemArtist>작곡가</S.BoardItemArtist>
          </S.BoardItemMeta>
        </S.BoardItemContent>
      </S.BoardItemContainer>
    </S.BoardItem>
  );
};

export default BoardItem;
