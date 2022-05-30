import React, { Suspense, useRef } from 'react'
import Header from './components/header'
import HtmlPart from './components/HtmlPart'
import { Canvas, useFrame } from '@react-three/fiber'
import Lights from './components/Lights'
import { CanvasArea } from './components/Canvas'

import { Html, OrbitControls } from '@react-three/drei'

const Main = () => {
  const refGroup = useRef()

  return (
    <main>
      <Header />
      <div className='canvasArea-div'>
        <CanvasArea duckName='Merry' />
        <CanvasArea duckName='Joseph' />
        <CanvasArea duckName='David' />
        <CanvasArea duckName='Arthur' />
        <CanvasArea duckName='Antonio' />
      </div>
    </main>
  )
}

export default Main
