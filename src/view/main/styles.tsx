import styled, { keyframes } from "styled-components/macro";
import { THEME_COLOR, BREAKPOINT } from "../../constants";
import { fadeIn, rotation } from "../../animation/keyframe";

export const Main = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 1rem;
  animation: ${fadeIn} 0.5s linear;
  @media only screen and (min-width: ${BREAKPOINT}px) {
  }
`;
export const Image = styled.img`
  width: 300px;
  height: 300px;
  margin-top: 15rem;
  margin-right: 100rem;
  animation: ${rotation} 0.1s infinite;
`;
export const ImageContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: row;
`;
export const Section = styled.div`
  box-sizing: border-box;
  width: 100%;
  margin-bottom: 5rem;
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: ${BREAKPOINT}px) {
    margin-bottom: 30rem;
    flex-direction: row-reverse;
    align-items: center;
  }
`;

export const IntroContainer = styled.div`
  width: 100%;
  padding: 7rem 3rem;
  @media only screen and (min-width: ${BREAKPOINT}px) {
    width: 50%;
    height: 100%;
    padding: 0rem 10rem;
  }
`;

export const IntroTitle = styled.div`
  text-align: center;
  font-size: 4rem;
  font-weight: 800;
  color: ${THEME_COLOR.PRIMARY};
  @media only screen and (min-width: ${BREAKPOINT}px) {
    font-size: 5rem;
    text-align: left;
  }
`;

export const IntroSubtitle = styled.div`
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  margin-top: 1rem;
  @media only screen and (min-width: ${BREAKPOINT}px) {
    font-size: 2.4rem;
    text-align: left;
  }
`;

export const Intro = styled.div`
  text-align: center;
  font-size: 2rem;
  color: black;
  margin-top: 3rem;
  line-height: 4rem;
  @media only screen and (min-width: ${BREAKPOINT}px) {
    font-size: 2rem;
    margin-top: 5rem;
    text-align: left;
  }
`;

export const PrimaryColor = styled.span`
  color: ${THEME_COLOR.PRIMARY};
`;

export const SliderContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (min-width: ${BREAKPOINT}px) {
    width: 50%;
  }
`;

export const SliderTitle = styled.div`
  width: 80px;
  font-size: 2.2rem;
  font-weight: bold;
  margin: 60px 30px;
  margin-bottom: 0.3rem;
  border-bottom: 0.3rem solid ${THEME_COLOR.PRIMARY};
  display: flex;
  align-items: flex-start;
`;

export const ContentsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 0rem 5rem;
  text-align: center;
  @media only screen and (min-width: ${BREAKPOINT}px) {
    justify-content: center;
  }
`;

export const Content = styled.a`
  width: 15rem;
  height: 15rem;
  font-weight: 800;
  font-size: 1.5rem;
  border-radius: 50%;
  letter-spacing: 0.2rem;
  color: black;
  background-color: ${THEME_COLOR.GRAY};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  img {
    width: 5rem;
    height: 5rem;
    margin-bottom: 0.5rem;
  }
  &:hover {
    background-color: #999999;
  }
  @media only screen and (min-width: ${BREAKPOINT}px) {
    width: 20rem;
    height: 20rem;
    font-size: 1.8rem;
    margin: 0rem 5rem;
  }
`;

export const SectionTitle = styled.div`
  display: inline-block;
  margin-left: 2rem;
  font-size: 2.2rem;
  font-weight: bold;
  margin-bottom: 5rem;
  border-bottom: 0.3rem solid ${THEME_COLOR.PRIMARY};
`;

export const KeywordSectionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and (min-width: ${BREAKPOINT}px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

export const KeywordContainer = styled.div`
  width: 25rem;
  height: 25rem;
  position: relative;
  background: ${THEME_COLOR.GRAY};
  border-radius: 50%;
  text-align: center;
  margin-bottom: 20rem;
  @media only screen and (min-width: ${BREAKPOINT}px) {
    width: 25rem;
    height: 25rem;
    margin-bottom: 0rem;
  }
`;

export const KeywordIcon = styled.img`
  display: block;
  position: absolute;
  z-index: 100;
  width: 12rem;
  top: 5rem;
  left: 0rem;
  right: 0rem;
  margin: auto;
`;

export const Keyword = styled.div`
  display: block;
  position: absolute;
  z-index: 100;
  top: 18rem;
  left: 0rem;
  right: 0rem;
  margin: auto;
  color: black;
  font-size: 2rem;
  font-weight: 800;
  letter-spacing: 0.2rem;
`;

export const KeywordCaption = styled.div`
  display: block;
  color: black;
  position: absolute;
  z-index: 100;
  top: 27rem;
  left: 0rem;
  right: 0rem;
  margin: auto;
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 2.5rem;
`;

const bounce = keyframes`
  0%   { transform: translateY(0); }
  100%  { transform: translateY(-2rem); }
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 5rem 0rem;
  @media only screen and (min-width: ${BREAKPOINT}px) {
    margin: 0rem;
  }
`;

export const JoinButton = styled.button`
  position: relative;
  width: 30rem;
  height: 6rem;
  background-color: ${THEME_COLOR.PRIMARY};
  border-radius: 3rem;
  border: 0;
  color: white;
  font-size: 3rem;
  letter-spacing: 0.3rem;
  font-weight: 700;
  transition: all 0.2s ease;
  &:hover {
    opacity: 0.5;
    transform: scale(0.9);
  }
  animation: ${bounce} 0.5s ease infinite alternate;
`;
