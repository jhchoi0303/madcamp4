import React from "react";
import * as S from "./styles";
import styled from "styled-components/macro";

const Button = styled.button`
  background-color: white;
  outline: none;
  border: none;
  height: 30px;
  width: 50px;
  margin-left: 10px;
  font-weight: bold;
`;
const Input = styled.input`
  width: 200px;
  outline: none;
  ::placeholder {
    text-align: center;
  }
`;

interface UrlInputBoxProps {}

interface UrlInputBoxState {}

class UrlInputBox extends React.Component<UrlInputBoxProps, UrlInputBoxState> {
  textInput: React.RefObject<HTMLInputElement>;

  constructor(props: UrlInputBoxProps) {
    super(props);

    this.textInput = React.createRef();
    this.state = {
      value: "",
    };
  }

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  render() {
    return (
      <S.URLInputBoxForm className="url-box" onSubmit={this.handleSubmit}>
        <Input placeholder="Paste Youtube URL"></Input>
        <Button>Load</Button>
      </S.URLInputBoxForm>
    );
  }
}

export default UrlInputBox;
