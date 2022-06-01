import React, { Suspense, useRef, useState } from 'react'
import Header from './components/header'
import HtmlPart from './components/HtmlPart'
import { Canvas, useFrame } from '@react-three/fiber'
import Lights from './components/Lights'
import { CanvasArea } from './components/Canvas'
import Subary from './components/Subary'
import PostDuck from './components/PostDuck'
import Modal from './components/Modal'

import { Html, OrbitControls } from '@react-three/drei'

const Main = () => {
  const refGroup = useRef()
  const [modalIsShown, setIsShown] = useState(false)
  const [modalModel, setModel] = useState(null)

  const modalHandler = (e, model) => {
    if (e) {
      if (e.target === e.currentTarget) setIsShown(!modalIsShown)
    } else {
      console.log('handler')
      setIsShown(!modalIsShown)
      setModel(model)
    }
  }

  return (
    <main>
      <Header />
      <Modal isShown={modalIsShown} model={modalModel} handler={modalHandler} />
      <div className='canvasArea-div'>
        <CanvasArea
          duckName='Merry'
          model={<Subary />}
          handler={modalHandler}
        />
        <CanvasArea
          duckName='Joseph'
          model={<PostDuck />}
          handler={modalHandler}
        />
        <CanvasArea
          duckName='David'
          model={<PostDuck />}
          handler={modalHandler}
        />
        <CanvasArea
          duckName='Arthur'
          model={<PostDuck />}
          handler={modalHandler}
        />
        <CanvasArea
          duckName='Antonio'
          model={<PostDuck />}
          handler={modalHandler}
        />
      </div>
    </main>
  )
}

export default Main
