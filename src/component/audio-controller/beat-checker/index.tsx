import React from "react"

interface BeatCheckerProps {
}

class BeatChecker extends React.Component<BeatCheckerProps> {
  constructor(props: BeatCheckerProps) {
    super(props);
  }

  render() {
    return (
      <span>128 bpm</span>
    )
  }
}

export default BeatChecker;