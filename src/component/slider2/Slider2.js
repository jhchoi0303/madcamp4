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

const Styles2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 350px;

  color: #888;

  .value {
    flex: 1;
    font-size: 2rem;
    text-align: center;
  }
  .slider {
    flex: 3;
    -webkit-appearance: none;
    width: 300px;
    height: 15px;
    border-radius: 5px;
    background: #efefef;
    outline: none;
    margin-left: 40px;
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
export default class Slider2 extends React.Component {
  state = {
    value: 0,
  };

  handleOnChange = (e) => this.setState({ value: e.target.value });

  render() {
    return (
      <Styles2
        opacity={this.state.value > 10 ? this.state.value / 255 : 0.1}
        color={this.props.color}
      >
        <input
          type="range"
          min={-10}
          max={10}
          value={this.state.value}
          className="slider"
          onChange={this.handleOnChange}
        />
        <div className="value">{this.state.value}</div>
      </Styles2>
    );
  }
}
