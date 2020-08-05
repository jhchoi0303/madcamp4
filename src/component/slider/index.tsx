import React from "react";
import * as S from "./styles";
import Slider from "./Slider";

interface SliderProps {}

const HighMidLow: React.FC<SliderProps> = () => {
  return (
    <S.SliderContainer>
      <S.Slider>
        <Slider color="#eeeeee" opacity="0.1"></Slider>
      </S.Slider>
      <S.Slider>
        <Slider color="#eeeeee" opacity="0.1"></Slider>
      </S.Slider>
      <S.Slider>
        <Slider color="#eeeeee" opacity="0.1"></Slider>
      </S.Slider>
    </S.SliderContainer>
  );
};

export default HighMidLow;
