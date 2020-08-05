import React from "react";

import * as S from "./styles";

import UrlInputBox from "./url-input-box";
import Player from "./player";

interface YoutubePlayerProps {
  position: String;
}

class YoutubePlayer extends React.Component<YoutubePlayerProps> {
  constructor(props: YoutubePlayerProps) {
    super(props);
  }

  render() {
    return (
      <S.YoutubePlayer>
        <UrlInputBox></UrlInputBox>
        <Player></Player>
      </S.YoutubePlayer>
    );
  }
}

export default YoutubePlayer;
