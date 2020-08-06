import React from "react";
import * as S from "./styles";

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
        <input type="text" placeholder="Youtube URL" />
        <button>Load</button>
      </S.URLInputBoxForm>
    );
  }
}

export default UrlInputBox;
