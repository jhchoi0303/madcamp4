import styled, { keyframes } from "styled-components/macro";
import { THEME_COLOR, BREAKPOINT } from "../../constants";
import { fadeIn, rotation } from "../../animation/keyframe";

export const Main = styled.div`
  margin-top: 1rem;
  animation: ${fadeIn} 1s linear;
  @media only screen and (min-width: ${BREAKPOINT}px) {
  }
`;
export const Image = styled.img`
  margin: 0;
  animation: ${rotation} 6s infinite;
`;
export const ImageContainer = styled.div`
  width: 400px;
  height: 400px;
`;
