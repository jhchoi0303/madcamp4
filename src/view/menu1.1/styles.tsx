import styled, { keyframes } from "styled-components/macro";
import { THEME_COLOR, BREAKPOINT } from "../../constants";
import { fadeIn } from "../../animation/keyframe";

export const Main = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 1rem;

  background-size: cover;
  animation: ${fadeIn} 1.5s linear;
  @media only screen and (min-width: ${BREAKPOINT}px) {
  }
`;

export const Section = styled.div`
  box-sizing: border-box;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (min-width: ${BREAKPOINT}px) {
    flex-direction: row-reverse;
    align-items: center;
  }
`;
