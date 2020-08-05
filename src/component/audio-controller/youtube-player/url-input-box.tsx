import React from "react";
import * as S from "./styles"

interface UrlInputBoxProps {
}

interface UrlInputBoxState {
}

class UrlInputBox extends React.Component<UrlInputBoxProps, UrlInputBoxState> {
  constructor(props: UrlInputBoxProps) {
    super(props);
  }

  render() {
    return (
      <S.URLInputBoxForm>
        <input type="text" placeholder="Youtube URL"/>
        <button>Load</button>
      </S.URLInputBoxForm>
    );
  }
}

export default UrlInputBox;