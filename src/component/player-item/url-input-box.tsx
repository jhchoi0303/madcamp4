import React from "react";
import styled from "styled-components/macro";

interface UrlInputBoxProps {
  position: String;
}

interface UrlInputBoxState {
  value: String;
}

class UrlInputBox extends React.Component<UrlInputBoxProps, UrlInputBoxState> {
  textInput: React.RefObject<HTMLInputElement>;
  
  constructor(props: UrlInputBoxProps) {
    super(props);

    this.textInput = React.createRef();
    this.state = {
      value: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const inputElem = this.textInput.current;
    console.log(inputElem);
    if (inputElem != null) {
      const url = inputElem.value;

      this.setState({ value: url });
      this.getAudioByUrl(url);
    }
  };

  getAudioByUrl(url: string) {
    const request = new XMLHttpRequest();

    let index = 0;
    if (this.props.position == 'right') {
      index = 1;
    }

    request.open("GET", `/api/youtube/download?url=${url}`, true);
    request.responseType = "blob";
    request.onload = function() {
      if (this.status == 200) {
        const audio = document.querySelectorAll(".audio")[index] as HTMLAudioElement;
        if (audio != null) {
          audio.setAttribute("src", URL.createObjectURL(this.response));
          audio.load();
          alert("Loading success");
        }
      } else {
        alert("Check url");
      }
    };
    request.send();
  }
  

  render() {
    return (
      <div>
        <h1>YOUTUBE URL을 입력해주세오</h1>
        <h3>URL: {this.state.value}</h3>
        
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref={this.textInput} />
          <button>Submit</button>
        </form>
        <audio className="audio" controls loop></audio>
        <button className="play-btn">play</button>
      </div>
    );
  }
}

export default UrlInputBox;