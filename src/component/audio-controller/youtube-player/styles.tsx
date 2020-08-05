import styled from "styled-components/macro";

interface PlayButtonProps {
  position: String;
}

export const YoutubePlayer = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;

  flex-basis:40%;
`

export const URLInputBoxForm = styled.form`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
`

export const WaveformContainer = styled.div`
  flex-grow:1

  display:flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;

  width: 100%;
`

export const Wave = styled.div`
  order: 2;
  width: 100%;
  height: 140px;
`

function playButtonMargin(props: PlayButtonProps) {
  if (props.position == "left") {
    return "0 0 0 auto";
  } else {
    return "0 auto 0 0";
  }
}

export const PlayButton = styled.button`
  order: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  margin: ${(props: PlayButtonProps) => playButtonMargin(props)};

  width: 100px;
  height: 50px;

  background: #EFEFEF;
  border: none;
  outline: none;
  cursor: pointer;
  padding-bottom: 3px;

  &:hover {
    background: #DDD;
  }
`

export const TitleBox = styled.div`
  height:50px;
`