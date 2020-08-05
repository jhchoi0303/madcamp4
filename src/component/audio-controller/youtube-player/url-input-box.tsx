import React, { FormEvent } from "react";
import styled from "styled-components/macro";

interface UrlInputBoxProps {}

interface UrlInputBoxState {}

const Styles = styled.form`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
`;

class UrlInputBox extends React.Component<UrlInputBoxProps, UrlInputBoxState> {
  textInput: React.RefObject<HTMLInputElement>;

  constructor(props: UrlInputBoxProps) {
    super(props);

    this.textInput = React.createRef();
    this.state = {
      value: "",
    };
  }

  handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const inputElem = this.textInput.current as HTMLInputElement;
    const url = inputElem.value;
    this.setState({ value: url });

    this.getAudioByUrl(url);
  };

  getAudioByUrl(url: String) {
    const request = new XMLHttpRequest();
    request.open("GET", `/api/youtube/download?url=${url}`, true);
    request.responseType = "blob";
    request.onload = function () {
      if (this.status === 200) {
        const audio: HTMLAudioElement | null = document.querySelector("#audio");

        if (audio != null) {
          audio.setAttribute("src", URL.createObjectURL(this.response));
          audio.load();
          alert("Loading success");
        }
      }
    };
    request.send();
  }
  render() {
    return (
      <UrlInputBox>
        <Styles>
          <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Youtube URL" ref={this.textInput} />
            <button>Load</button>
          </form>

          <audio id="audio" controls loop></audio>
        </Styles>
      </UrlInputBox>
    );
  }
}

export default UrlInputBox;
