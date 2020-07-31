import { Link } from "react-router-dom";
import styled from "styled-components/macro";

import { THEME_COLOR } from "../../constants";

export const Board = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem 0rem;
  margin-top: 1rem;
`;

export const BoardContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 0rem 2rem;
  margin-bottom: 2rem;
`;

export const Title = styled.div`
  font-size: 2.2rem;
  font-weight: bold;
  margin-bottom: 0.3rem;
  border-bottom: 0.3rem solid ${THEME_COLOR.PRIMARY};
`;

export const BoardListContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const BoardToolsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 100%;
  padding: 0rem 2rem;
  margin: 1.5rem 0rem;
  img {
    width: 1.4rem;
    height: 1.4rem;
    cursor: pointer;
  }
`;

export const PaginationContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 2.5rem 0rem;
  padding: 0rem 1.5rem;
`;

export const WriteButton = styled(Link)`
  font-size: 1.4rem;
  text-decoration: none;
  background-color: ${THEME_COLOR.PRIMARY};
  color: white;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  border-radius: 0.5rem;
`;

export const ModalContainer = styled.div`
  width: 100%;
  padding: 1.5rem 2rem;
  height: 22rem;
`;

export const ModalHeader = styled.div`
  width: 100%;
  font-size: 1.6rem;
  font-weight: bold;
  margin-bottom: 3rem;
`;

export const ModalSearchSelect = styled.select`
  width: 100%;
  font-size: 1.4rem;
  height: 4rem;
  border: 1px solid ${THEME_COLOR.GRAYER};
  margin-bottom: 1rem;
  padding: 0.8rem 1rem;
`;

export const ModalSearchOption = styled.option`
  width: 100%;
  border: 1px solid ${THEME_COLOR.GRAYER};
`;

export const ModalSearchInput = styled.input`
  width: 100%;
  font-size: 1.4rem;
  height: 4rem;
  outline: none;
  border: 1px solid ${THEME_COLOR.GRAYER};
  padding: 0.8rem 1rem;
  margin-bottom: 1rem;
`;

export const ModalSearchButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

interface ModalSearchButtonProps {
  search?: boolean;
}

export const ModalSearchButton = styled.button<ModalSearchButtonProps>`
  width: 6rem;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: inherit;
  color: ${(props) => (props.search ? `${THEME_COLOR.PRIMARY}` : `black`)};
  font-size: 1.4rem;
`;
