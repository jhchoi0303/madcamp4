import styled, { keyframes } from "styled-components/macro";
import { THEME_COLOR, BREAKPOINT } from "../../constants";
import { fadeIn, rotation } from "../../animation/keyframe";

export const Main = styled.div`
  width: 100%;
  height: 100%;
  background-image: url("https://media1.giphy.com/media/TgMIg9SjkWVFhJWnv5/giphy.gif?cid=ecf05e4746edfeb919e81ecd1e0bb1be70d22c123337a22c&rid=giphy.gif");
  background-size: cover;
  margin-top: 1rem;
  animation: ${fadeIn} 1s linear;
  @media only screen and (min-width: ${BREAKPOINT}px) {
  }
`;
export const Title = styled.div`
  width: 100%;
  height: 50px;
  color: white;
  text-align: center;
  font-family: Impact, Charcoal, sans-serif;
  font-size: 80px;
  margin-bottom: 50px;
`;
export const Content = styled.div`
  width: 100%;
  height: 50px;
  color: white;
  text-align: center;
  font-family: Impact, Charcoal, sans-serif;
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
  background-color: rgb(220, 220, 220, 0.1);

  border-radius: 225px;
`;
export const Text = styled.div`
  width: 100%;
  height: 400px;

  color: white;
  font-size: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  background: rgba(0, 0, 0, 0.7);
`;
export const RecordPlayer = styled.div`
  width: 100%;
  height: 600px;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 20px;
`;
export const Section = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;

  animation: ${fadeIn} 2s linear;
  @media only screen and (min-width: ${BREAKPOINT}px) {
    align-items: center;
  }
`;
