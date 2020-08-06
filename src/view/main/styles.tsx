import styled, { keyframes } from "styled-components/macro";
import { THEME_COLOR, BREAKPOINT } from "../../constants";
import { fadeIn, rotation } from "../../animation/keyframe";

export const Main = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 1rem;
  animation: ${fadeIn} 1s linear;
  @media only screen and (min-width: ${BREAKPOINT}px) {
  }
`;
export const Image = styled.img`
  width: 400px;
  height: 400px;
  animation: ${rotation} 0.1s infinite;
  -webkit-filter: drop-shadow(3px 3px 3px white);
  filter: drop-shadow(3px 3px 3px white);
`;
export const ImageContainer = styled.div`
  margin-right: 10rem;
  width: 450px;
  height: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(220, 220, 220, 0.5);

  border-radius: 225px;
`;
export const Text = styled.div`
  width: 300px;
  height: 400px;

  color: white;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  border-radius: 20px;
`;
export const RecordPlayer = styled.div`
  width: 1000px;
  height: 600px;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: grey;
  border-radius: 20px;
`;
export const Section = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;

  @media only screen and (min-width: ${BREAKPOINT}px) {
    align-items: center;
  }
`;
