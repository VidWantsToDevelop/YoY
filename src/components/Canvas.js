import React, { Suspense, useRef } from 'react'
import HtmlPart from './HtmlPart'
import { Canvas, useFrame } from '@react-three/fiber'
import Lights from './Lights'
import Subary from './Subary'
import PostDuck from './PostDuck'
import { Section } from './section'

import { Html, OrbitControls, useProgress } from '@react-three/drei'

function CanvasArea(props) {
  return (
    <div className='canvasArea'>
      <div className='canvasWrapper'>
        <CanvasBox model={props.model} handler={props.handler} />
      </div>
      <div className='container'>
        <h1 className='title'>{props.duckName}</h1>
        <div className='amountBar'>
          <div>
            <h5 className='amountManage' onClick={(e) => manageAmount(e, true)}>
              -
            </h5>
          </div>
          <p className='counter'>0</p>
          <div>
            <h5
              className='amountManage'
              onClick={(e) => manageAmount(e, false)}
            >
              +
            </h5>
          </div>
        </div>
        <button>Add to cart</button>
      </div>
    </div>
  )
}

const CanvasBox = (props) => {
  return (
    <section onClick={() => props.handler(null, props.model)}>
      <Canvas
        style={{ backgroundColor: 'transparent', borderRadius: '25px' }}
        camera={{ position: [0, 0, 120], fov: 70 }}
        className='groupWrapper'
      >
        <Lights />
        <Suspense fallback={<Loading />} r3f>
          <HtmlPart posY={250} component={props.model}></HtmlPart>
        </Suspense>
      </Canvas>
    </section>
  )
}

const Loading = () => {
  const { progress } = useProgress()
  return (
    <Html style={{ color: 'white' }} center>
      {Math.round(progress)} % loaded
    </Html>
  )
}

//Functions

const manageAmount = (e, isSubtraction) => {
  if (isSubtraction) {
    if (e.target.parentNode.nextElementSibling.innerText > 0)
      e.target.parentNode.nextElementSibling.innerText--
  } else e.target.parentNode.previousElementSibling.innerText++
}

export { CanvasArea, CanvasBox, Loading }
