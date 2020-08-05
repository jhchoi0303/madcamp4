import React from "react";

interface PlayerProps {

}

class Player extends React.Component<PlayerProps> {
  constructor(props: PlayerProps) {
    super(props);
  }

  render() {
    return (
      <div>
        <audio controls></audio>
      </div>
    )
  }
}

export default Player