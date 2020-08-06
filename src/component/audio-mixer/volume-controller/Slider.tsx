import React from "react";
import styled from "styled-components/macro";
import { THEME_COLOR } from "../../../constants";
interface SliderProps {
  color: string;
  opacity: string;
}

interface SliderState {
  value: number;
}

const sliderThumbStyles = (props: SliderProps) => `
  width: 25px;
  height: 25px;
  background: ${THEME_COLOR.ORANGE};
  cursor: pointer;
  outline: 3px solid rgb(51,51,51,0.5);
  -webkit-transition: .2s;
  transition: opacity .2s;
`;

const Styles = styled.div`
  display: flex;
  align-items: center;
  width: 150px;
  -webkit-transform: rotate(-90deg);
  color: #888;
  position: relative;
  margin: 62px -31px;
  .value {
    flex: 1;
    font-size: 2rem;
    text-align: center;
    transform: rotate(-270deg);
  }
  .slider {
    flex: 3;
    -webkit-appearance: none;
    width: 150px;
    height: 15px;
    border-radius: 5px;
    background: #efefef;
    outline: none;
    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      ${(props: SliderProps) => sliderThumbStyles(props)}
    }
    &::-moz-range-thumb {
      ${(props: SliderProps) => sliderThumbStyles(props)}
    }
  }
`;

class Slider extends React.Component<SliderProps, SliderState> {
  constructor(props: SliderProps) {
    super(props);

    this.state = {
      value: 100,
    };
  }

  render() {
    const value = this.state.value;
    return (
      <Styles
        opacity={(value > 10 ? value / 255 : 0.1).toString()}
        color={this.props.color}
      >
        <input
          type="range"
          min={0}
          max={100}
          value={this.state.value}
          className="slider master"
          onChange={(ev) => this.setState({ value: parseInt(ev.target.value) })}
        />
        <div className="value master-value">{this.state.value}</div>
      </Styles>
    );
  }
}

export default Slider;
