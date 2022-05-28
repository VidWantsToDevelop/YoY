import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Section } from './section'
import ClassicDuck from './ClassicDuck'

import { Html } from '@react-three/drei'

class HtmlPart extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Section factor={1.5} offset={1}>
        <group position={[0, 250, 0]}>
          <mesh position={[0, 35, 0]}>
            <ClassicDuck />
          </mesh>
          <Html fullscreen>
            <div className='container'>
              <h1 className='title'>Hello</h1>
            </div>
          </Html>
        </group>
      </Section>
    )
  }
}

export default HtmlPart
