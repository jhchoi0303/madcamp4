import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

interface AudioProps {
    title: string;
}

class Download extends React.Component<RouteComponentProps<AudioProps>> {
    constructor (props: RouteComponentProps<AudioProps>) {
        super(props);
    }

    componentDidMount() {
        const {title} = this.props.match.params;
        const request = new XMLHttpRequest();

        request.open("GET", `/api/youtube/download?title=${title}`, true);
        request.responseType="blob";
        request.onload = function() {
            if (this.status == 200) {
                const audio: HTMLAudioElement | null = document.querySelector('#audio');

                if (audio != null) {
                    audio.setAttribute('src', URL.createObjectURL(this.response));
                    audio.load();
                    alert("Loading success");
                }
            }
        }
        request.send();
    }

    render() {
        return (
            <React.Fragment>
                <audio id="audio" src="#" controls></audio>
            </React.Fragment>
        )
    }
}

export default Download;