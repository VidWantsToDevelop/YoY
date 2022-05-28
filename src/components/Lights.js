import React from 'react'

class Lights extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <>
        <ambientLight intensity={0.75} />
        <directionalLight position={[5, 10, 5]} intensity={1} />
      </>
    )
  }
}

export default Lights
