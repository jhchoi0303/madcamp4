import React from "react";

import * as S from "./styles";

interface HotBoardItemProps {}

const HotBoardItem: React.FC<HotBoardItemProps> = () => {
  return (
    <S.HotBoardItem>
      <S.HotBoardItemContainer to="/madcamp4/post">
        <S.HotBoardItemTitle>노래 제목</S.HotBoardItemTitle>
        <S.HotBoardItemContent>
          <S.HotBoardItemImage></S.HotBoardItemImage>
          <S.HotBoardItemMeta>
            <S.HotBoardItemLike>좋아요 수</S.HotBoardItemLike>
            <S.HotBoardItemViews>조회수</S.HotBoardItemViews>
            <S.HotBoardItemArtist>작곡가</S.HotBoardItemArtist>
          </S.HotBoardItemMeta>
        </S.HotBoardItemContent>
      </S.HotBoardItemContainer>
    </S.HotBoardItem>
  );
};

export default HotBoardItem;
