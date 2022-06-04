import React, { Suspense, useRef, useEffect, useState } from 'react'
import HtmlPart from './HtmlPart'
import { Canvas, useFrame } from '@react-three/fiber'
import Lights from './Lights'
import { Notification, Color } from './Notification'

import { Html, OrbitControls, useProgress } from '@react-three/drei'
import { render } from '@testing-library/react'

function CanvasArea(props) {
  return (
    <div className='canvasArea'>
      <div className='canvasWrapper'>
        <CanvasBox duck={props} />
      </div>
      <div className='containerC'>
        <h1 className='title'>{props.duckName}</h1>
        <div className='amountBar'>
          <div>
            <h5 className='amountManage' onClick={(e) => manageAmount(e, true)}>
              -
            </h5>
          </div>
          <p className='counter' id={`counter_${props.index}`}>
            0
          </p>
          <div>
            <h5
              className='amountManage'
              onClick={(e) => manageAmount(e, false)}
            >
              +
            </h5>
          </div>
        </div>
        <button
          onClick={(e) => props.createNotification(Color.info)}
          id={`button_${props.index}`}
        >
          Add to cart
        </button>
      </div>
    </div>
  )
}

const CanvasBox = (props) => {
  const ref = useRef()

  return (
    <section
      onClick={(e) => {
        props.duck.handler(null, props.duck)

        render()
      }}
    >
      <Canvas
        style={{ backgroundColor: 'transparent', borderRadius: '25px' }}
        camera={{ position: [0, 0, 120], fov: 70 }}
        className='groupWrapper'
      >
        <Lights />
        <Suspense fallback={<Loading />} r3f>
          <HtmlPart
            posY={250}
            component={props.duck.model}
            isModal={false}
          ></HtmlPart>
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

const addToCart = (e, notificationsP) => {
  const index = e.target.id.replace('button_', '')
  const amount = document.querySelector(`#counter_${index}`).innerHTML

  const [notifications, setNotifications] = [...notificationsP]

  document.querySelector('.notifications').style.display = 'flex'

  const key = new Date().getTime().toString()
  console.log(key)

  setNotifications(
    notifications.concat(
      <Notification
        counter={notifications.length + 1}
        amount={amount}
        reducer={setNotifications}
        array={notifications}
        key={key}
      />
    )
  )
}
export { CanvasArea, CanvasBox, Loading }
