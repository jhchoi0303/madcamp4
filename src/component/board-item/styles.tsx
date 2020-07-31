import styled from "styled-components/macro";
import { Link } from "react-router-dom";

import { THEME_COLOR } from "../../constants";

export const BoardItem = styled.li`
  width: 100%;
  height: 5.5rem;
  border-top: 1px solid ${THEME_COLOR.GRAY};
  &:hover {
    background-color: ${THEME_COLOR.GRAY};
  }
  transition: background-color 0.5s;
`;

export const BoardItemContainer = styled(Link)`
  width: 100%;
  height: 100%;
  padding: 1rem;
  text-decoration: none;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const BoardItemTitle = styled.div`
  font-size: 1.4rem;
  letter-spacing: 1px; /* for bettter reading experience */
`;

export const BoardItemMeta = styled.div``;

export const BoardItemMetaLeft = styled.div``;

export const BoardItemMetaRight = styled.div``;
