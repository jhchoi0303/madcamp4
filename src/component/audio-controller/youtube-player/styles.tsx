import styled from "styled-components/macro";
import { THEME_COLOR } from "../../../constants";
interface PlayButtonProps {
  position: String;
}

export const YoutubePlayer = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;

  flex-basis: 40%;
`;

export const URLInputBoxForm = styled.form`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
`;

export const WaveformContainer = styled.div`
  flex-grow:1

  display:flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;

  width: 100%;
`;

export const Wave = styled.div`
  order: 2;
  width: 100%;
  height: 140px;
`;

function playButtonMargin(props: PlayButtonProps) {
  if (props.position == "left") {
    return "0 0 0 auto";
  } else {
    return "0 0 auto 0";
  }
}

export const PlayButtonContainer = styled.div`
  width: 100%;
`;

export const PlayButton = styled.button`
  order: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  margin: ${(props: PlayButtonProps) => playButtonMargin(props)};

  width: 70px;
  height: 35px;

  color: white;

  outline: none;
  cursor: pointer;
  padding-bottom: 3px;
  display: block;
  border: 2px white solid;
  background-color: ${THEME_COLOR.ORANGER};
  transition: all 0.9s, color 0.3;

  .btn:active {
    transform: translateY(3px);
  }
  img {
    resize: both;
    margin-top: 3px;
    height: 50%;
  }

  &:hover {
    box-shadow: 200px 0 0 0 rgba(0, 0, 0, 0.25) inset,
      -200px 0 0 0 rgba(0, 0, 0, 0.25) inset;
  }
`;

export const TimeBox = styled.div`
  color: white;
  text-align: center;
  font-size: 1.5rem;
  margin: 0 40%;
`

export const TitleBox = styled.div`
  margin: 20px 0 0;
  height: 50px;
  text-align: center;
  font-size: 1.5rem;
  color: white;
`;
