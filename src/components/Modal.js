import React, { useState, Suspense } from 'react'
import HtmlPart from './HtmlPart'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

import { Loading } from './Canvas'
import PostDuck from './PostDuck'
import Lights from './Lights'

const Modal = (props) => {
  console.log(props)
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
            <div className='modal-leftSide-firstPart'>
              <Canvas
                style={{
                  backgroundColor: 'transparent',
                  borderRadius: '25px',
                  width: '100%',
                  height: '15rem',
                }}
                camera={{ position: [0, 0, 120], fov: 70 }}
                className='groupWrapper'
              >
                <Lights />
                <Suspense fallback={<Loading />} r3f>
                  <HtmlPart
                    posY={250}
                    component={props.duck.model}
                    isModal={true}
                  ></HtmlPart>
                </Suspense>
                <OrbitControls />
              </Canvas>
            </div>
          </div>
          <div className='modal-rightSide'>
            <div className='modal-description'>
              <p className='duck-description'>{props.duck.description}</p>
            </div>
            <div className='modal-purchase'>
              <div className='amountBar'>
                <div>
                  <h5
                    className='amountManage'
                    onClick={(e) => manageAmount(e, true)}
                  >
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
        </div>
      </div>
    </>
  )
}

const manageAmount = (e, isSubtraction) => {
  if (isSubtraction) {
    if (e.target.parentNode.nextElementSibling.innerText > 0)
      e.target.parentNode.nextElementSibling.innerText--
  } else e.target.parentNode.previousElementSibling.innerText++
}

export default Modal
