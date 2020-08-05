import React from "react";
import * as S from "./styles";
import Slider from "./Slider";
import Slider2 from "./Slider2";

interface MasterProps {}

const Master: React.FC<MasterProps> = () => {
  return (
    <S.SliderColumn>
      <S.SliderRow>
        <S.Slider>
          <Slider color="#eeeeee" opacity="0.1"></Slider>
        </S.Slider>
        <S.Slider>
          <Slider color="#eeeeee" opacity="0.1"></Slider>
        </S.Slider>
      </S.SliderRow>

      <Slider2 color="#eeeeee" opacity="0.1"></Slider2>
    </S.SliderColumn>
  );
};

export default Master;
