import React, { useState, Suspense } from 'react'
import HtmlPart from './HtmlPart'
import { Canvas } from '@react-three/fiber'

import { Loading } from './Canvas'
import PostDuck from './PostDuck'
import Lights from './Lights'

const Modal = (props) => {
  return (
    <>
      <div
        className='modalArea'
        style={{ display: props.isShown ? 'flex' : 'none' }}
        onClick={(e) => {
          props.isShown ? props.handler(e) : void 1
        }}
      >
        <div className='modalBody'>
          <div className='modal-leftSide'>
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
          </div>
          <div className='modal-rightSide'>
            <div className='modal-description'>
              <p className='duck-description'>
                A great example of the hard-working duck. This duck wakes up
                early in the morning to deliver all the letters to the other
                citizens of the DuckVille. Unlike other ducks, Post Duck is
                always in a great mood and ready to help others.
              </p>
            </div>
            <div className='modal-purchase'></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal
