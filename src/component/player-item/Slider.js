import React from "react";
import styled from "styled-components";

const sliderThumbStyles = (props) => `
  width: 25px;
  height: 25px;
  background: ${props.color};
  cursor: pointer;
  outline: 5px solid #333;
  opacity: ${props.opacity};
  -webkit-transition: .2s;
  transition: opacity .2s;
`;

const Styles = styled.div`
  display: flex;
  align-items: center;
  transform: rotate(-90deg);
  color: #888;
  margin-top: 2rem;
  margin-bottom: 2rem;
  .value {
    flex: 1;
    font-size: 2rem;
    transform: rotate(-270deg);
  }
  .slider {
    flex: 5;
    -webkit-appearance: none;
    width: 60%;
    height: 20px;
    border-radius: 5px;
    background: #efefef;
    outline: none;
    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      ${(props) => sliderThumbStyles(props)}
    }
    &::-moz-range-thumb {
      ${(props) => sliderThumbStyles(props)}
    }
  }
`;

export default class Slider extends React.Component {
  state = {
    value: 0,
  };

  handleOnChange = (e) => this.setState({ value: e.target.value });

  render() {
    return (
      <Styles
        opacity={this.state.value > 10 ? this.state.value / 255 : 0.1}
        color={this.props.color}
      >
        <input
          type="range"
          min={-10}
          max={5}
          value={this.state.value}
          className="slider"
          onChange={this.handleOnChange}
        />
        <div className="value">{this.state.value}</div>
      </Styles>
    );
  }
}
