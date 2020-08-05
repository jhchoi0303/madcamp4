import styled, { keyframes } from "styled-components/macro";
import { THEME_COLOR, BREAKPOINT } from "../../constants";

export const Main = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 1rem;
  @media only screen and (min-width: ${BREAKPOINT}px) {
  }
`;

export const Section = styled.div`
  box-sizing: border-box;
  width: 100%;
  margin-bottom: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (min-width: ${BREAKPOINT}px) {
    margin-bottom: 30rem;
    flex-direction: row-reverse;
    align-items: center;
  }
`;
