import React, { Suspense, useRef, useEffect, useState } from 'react'
import HtmlPart from './HtmlPart'
import { Canvas, useFrame } from '@react-three/fiber'
import Lights from './Lights'
import { Notification, Color } from './Notification'

import { Html, useProgress } from '@react-three/drei'

import { States } from '../Context/Context'

function CanvasArea(props) {
  const {
    state: { cart },
    dispatch,
  } = States()

  return (
    <div className='canvasArea'>
      <div className='canvasWrapper'>
        <CanvasBox duck={props} />
      </div>
      <div className='containerC'>
        <h1 className='title'>{props.duckName}</h1>
        <div className='amountBar'>
          <div>
            <div
              className='amountManage'
              onClick={(e) => manageAmount(e, true)}
            >
              -
            </div>
          </div>
          <div className='counter' id={`counter_${props.index}`}>
            0
          </div>
          <div>
            <div
              className='amountManage'
              onClick={(e) => manageAmount(e, false)}
            >
              +
            </div>
          </div>
        </div>
        <button
          onClick={(e) => {
            const amount = document.querySelector(
              '#counter_' + props.index
            ).innerText
            if (amount != 0) {
              if (cart.filter((el) => el.duckName === props.duckName).length) {
                dispatch({
                  type: 'ADD_ITEM',
                  payload: {
                    ...props.duck,
                    qty: parseInt(amount),
                  },
                })
                console.log(cart)
              } else {
                try {
                  dispatch({
                    type: 'CART_ADD',
                    payload: { ...props.duck, qty: parseInt(amount) },
                  })
                  console.log(cart)
                } catch (e) {
                  console.log('Exception')
                }
              }
              props.createNotification(
                Color.success,
                `${amount}x ${props.duckName} have been added to your cart`
              )
            } else {
              props.createNotification(Color.error, `Invalid amount of items`)
            }
          }}
          id={`button_${props.index}`}
        >
          Add to cart
        </button>
      </div>
    </div>
  )
}

const CanvasBox = (props) => {
  return (
    <section
      onClick={(e) => {
        props.duck.handler(null, props.duck)
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
