import styled, { keyframes } from "styled-components/macro";
import { THEME_COLOR, BREAKPOINT } from "../../../constants";
import { fadeIn, rotation } from "../../../animation/keyframe";

export const Image = styled.img`
  width: 200px;
  height: 200px;

  animation: ${rotation} 10s infinite;
`;

export const ImageContainer = styled.div`
  flex-basis: 20%;
  justify-content: center;
  align-items: center;

  display: flex;
  align-items: flex-start;
  flex-direction: row;
`;
