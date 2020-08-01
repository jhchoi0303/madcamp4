import styled from "styled-components/macro";
import { Link } from "react-router-dom";

import { THEME_COLOR } from "../../constants";

export const HotBoardItem = styled.li`
  width: 100%;
  height: 50rem;
  border-top: 1px solid ${THEME_COLOR.GRAY};
  &:hover {
    background-color: ${THEME_COLOR.GRAY};
  }
  transition: background-color 0.5s;
`;

export const HotBoardItemContainer = styled(Link)`
  width: 100%;
  height: 100%;

  text-decoration: none;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HotBoardItemTitle = styled.div`
  padding-top: 2rem;
  font-size: 1.7rem;
  text-align: center;
  letter-spacing: 1px; /* for bettter reading experience */
`;

export const HotBoardItemMeta = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2rem;
`;

export const HotBoardItemContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HotBoardItemMetaLeft = styled.div``;

export const HotBoardItemMetaRight = styled.div``;

export const HotBoardItemImage = styled.div`
  height: 15rem;
  width: 15rem;
  margin: 2rem;
  border: 0.1rem solid;
  background-image: url("https://cdn.pixabay.com/photo/2019/03/09/02/12/vinyl-record-4043560_960_720.png");
`;

export const HotBoardItemLike = styled.div`
  font-size: 1.2rem;
  height: 2rem;
`;
export const HotBoardItemViews = styled.div`
  font-size: 1.2rem;
  height: 2rem;
`;

export const HotBoardItemArtist = styled.div`
  font-size: 1.2rem;
  height: 2rem;
`;
