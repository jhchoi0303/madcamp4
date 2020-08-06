import React from "react";
import * as S from "./styles";
import Slider from "./Slider";

interface SliderProps {}

const AudioFilter: React.FC<SliderProps> = () => {
  return (
    <S.AudioFilter>
      <Slider color="#eeeeee" opacity="0.1"></Slider>
      <Slider color="#eeeeee" opacity="0.1"></Slider>
      <Slider color="#eeeeee" opacity="0.1"></Slider>
    </S.AudioFilter>
  );
};

export default AudioFilter;
