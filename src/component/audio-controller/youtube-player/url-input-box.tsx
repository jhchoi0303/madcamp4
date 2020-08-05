import React from "react";

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
      <form>
        <input type="text" placeholder="Youtube URL"/>
        <button>Load</button>
      </form>
    );
  }
}

export default UrlInputBox;