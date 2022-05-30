import React, { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Section } from './section'
import ClassicDuck from './ClassicDuck'
import Subary from './Subary'

import { Html } from '@react-three/drei'

const HtmlPart = (props) => {
  const refGroup = useRef()

  useFrame(() => {
    refGroup.current.rotation.x += 0.01
  })

  return (
    <Section factor={1.5} offset={1}>
      <group position={[0, props.posY, 0]}>
        <mesh ref={refGroup} position={[40, 0, 0]} rotation={[0.25, 0, 0]}>
          {props.component}
        </mesh>
      </group>
    </Section>
  )
}

export default HtmlPart
