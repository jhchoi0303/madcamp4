import React from "react";
import * as S from "./styles";
import Slider from "./Slider";
import Slider2 from "./Slider2";

interface MasterProps {}

const VolumeController: React.FC<MasterProps> = () => {
  return (
    <S.VolumeController>
      <S.MasterVolume>
        <Slider color="#eeeeee" opacity="0.1"></Slider>
        <Slider color="#eeeeee" opacity="0.1"></Slider>
      </S.MasterVolume>

      <Slider2 color="#eeeeee" opacity="0.1"></Slider2>
    </S.VolumeController>
  );
};

export default VolumeController;
