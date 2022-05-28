import React, { Suspense } from 'react'
import Header from './components/header'
import HtmlPart from './components/HtmlPart'
import { Canvas, useFrame } from '@react-three/fiber'
import Lights from './components/Lights'

import { Html, OrbitControls } from '@react-three/drei'

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      testState: 'HelloWorld',
    }
  }

  render() {
    return (
      <main>
        <Header />
        <Canvas colorManagement camera={{ position: [0, 0, 120], fov: 70 }}>
          <Lights />
          <Suspense fallback={null}>
            <HtmlPart />
          </Suspense>
          <OrbitControls />
        </Canvas>
      </main>
    )
  }
}

export default Main
