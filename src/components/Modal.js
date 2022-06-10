import React, { useState, Suspense } from 'react'
import HtmlPart from './HtmlPart'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

import { Loading } from './Canvas'
import Lights from './Lights'
import { States } from '../Context/Context'

const Modal = (props) => {
  const {
    state: { cart },
    dispatch,
  } = States()

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
                    if (
                      cart.filter((el) => el.duckName === props.duck.duckName)
                        .length
                    ) {
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
                      'success',
                      `${amount}x ${props.duck.duckName} have been added to your cart`
                    )
                  } else {
                    props.createNotification('error', `Invalid amount of items`)
                  }
                }}
                id={`button_${props.index}`}
              >
                Add to cart
              </button>
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
