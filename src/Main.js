import React, { Suspense, useRef, useState } from 'react'
import Header from './components/header'
import HtmlPart from './components/HtmlPart'
import { Canvas, useFrame } from '@react-three/fiber'
import Lights from './components/Lights'
import { CanvasArea } from './components/Canvas'
import Subary from './components/Subary'
import PostDuck from './components/PostDuck'
import HappyDuck from './components/HappyDuck'
import Modal from './components/Modal'
import { Data } from './Data/DummyData'

import { Html, OrbitControls } from '@react-three/drei'

const Main = () => {
  const refGroup = useRef()
  const [modalIsShown, setIsShown] = useState(false)
  const [modalModel, setModel] = useState(null)

  const modalHandler = (e, duck) => {
    if (e) {
      if (e.target === e.currentTarget) setIsShown(!modalIsShown)
    } else {
      console.log('handler')
      setModel(duck)
      setIsShown(!modalIsShown)
    }
  }

  return (
    <main>
      <Header />
      <Modal
        isShown={modalIsShown}
        duck={modalModel ? modalModel : 1}
        handler={modalHandler}
      />
      <div className='canvasArea-div'>
        {Data.map(({ duckName, description, model }) => {
          return (
            <CanvasArea
              duckName={duckName}
              model={model}
              handler={modalHandler}
              description={description}
              isModal={false}
            />
          )
        })}
      </div>
    </main>
  )
}

export default Main
