import React from "react";
import styled from "styled-components/macro"

interface UrlInputBoxProps {
}

interface UrlInputBoxState {
}

const Styles = styled.form`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
`

class UrlInputBox extends React.Component<UrlInputBoxProps, UrlInputBoxState> {
  constructor(props: UrlInputBoxProps) {
    super(props);
  }

  render() {
    return (
      <Styles>
        <input type="text" placeholder="Youtube URL"/>
        <button>Load</button>
      </Styles>
    );
  }
}

export default UrlInputBox;