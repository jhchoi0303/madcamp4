import React from "react";
import styled from "styled-components";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.textInput = React.createRef();
    this.state = {
      value: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const url = this.textInput.current.value;
    this.setState({ value: url });

    this.getAudioByUrl(url);
  };

  getAudioByUrl(url) {
    const request = new XMLHttpRequest();
    request.open("GET", `/api/youtube/download?url=${url}`, true);
    request.responseType = "blob";
    request.onload = function () {
      if (this.status == 200) {
        const audio = document.querySelector("#audio");

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
      <div>
        <h1>YOUTUBE URL을 입력해주세오</h1>
        <h3>URL: {this.state.value}</h3>

        <form onSubmit={this.handleSubmit}>
          <input type="text" ref={this.textInput} />
          <button>Submit</button>
        </form>
        <audio id="audio" controls loop></audio>
      </div>
    );
  }
}
