import React, { Suspense, useRef } from 'react'
import HtmlPart from './HtmlPart'
import { Canvas, useFrame } from '@react-three/fiber'
import Lights from './Lights'
import Subary from './Subary'
import PostDuck from './PostDuck'
import { Section } from './section'

import { Html, OrbitControls } from '@react-three/drei'

function CanvasArea(props) {
  return (
    <div className='canvasArea'>
      <div className='canvasWrapper'>
        <CanvasBox />
      </div>
      <div className='container'>
        <h1 className='title'>{props.duckName}</h1>
        <div className='amountBar'>
          <div>
            <h5 className='amountManage'>-</h5>
          </div>
          <p className='counter'>0</p>
          <div>
            <h5 className='amountManage'>+</h5>
          </div>
        </div>
        <button>Add to cart</button>
      </div>
    </div>
  )
}

const CanvasBox = () => {
  return (
    <section>
      <Canvas
        style={{ backgroundColor: 'transparent', borderRadius: '25px' }}
        camera={{ position: [0, 0, 120], fov: 70 }}
        className='groupWrapper'
      >
        <Lights />
        <Suspense fallback={null} r3f>
          <HtmlPart posY={250} component={<PostDuck />}></HtmlPart>
        </Suspense>
      </Canvas>
    </section>
  )
}

export { CanvasArea, CanvasBox }
