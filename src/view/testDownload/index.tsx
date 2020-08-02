import React from "react";
import { RouteComponentProps } from "react-router-dom";

interface AudioProps {
  title: string;
  email: string;
  url: string;
}

class Download extends React.Component<RouteComponentProps<AudioProps>> {
  constructor(props: RouteComponentProps<AudioProps>) {
    super(props);
  }

  componentDidMount() {
    const { title, email, url } = this.props.match.params;

    if (url == null) {
      this.getAudioByTitle(title, email);
    } else {
      this.getAudioByUrl(url);
    }
  }

  getAudioByTitle(title: string, email: string) {
    const request = new XMLHttpRequest();
    request.open(
      "GET",
      `/api/youtube/download?title=${title}&email=${email}`,
      true
    );
    request.responseType = "blob";
    request.onload = function () {
      if (this.status == 200) {
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

  getAudioByUrl(url: string) {
    const request = new XMLHttpRequest();
    request.open("GET", `/api/youtube/download?url=${url}`, true);
    request.responseType = "blob";
    request.onload = function () {
      if (this.status == 200) {
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
      <React.Fragment>
        <audio id="audio" controls loop></audio>
      </React.Fragment>
    );
  }
}

export default Download;
