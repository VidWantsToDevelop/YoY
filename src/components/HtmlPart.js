import React, { Suspense, useRef, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Section } from './section'
import ClassicDuck from './ClassicDuck'
import Subary from './Subary'
import PostDuck from './PostDuck'

import { Html } from '@react-three/drei'
import { render } from '@testing-library/react'

const HtmlPart = (props) => {
  const refGroup = useRef()

  if (!props.isModal) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useFrame(() => {
      refGroup.current.rotation.x += 0.01
    })
  }

  return (
    <Section factor={1.5} offset={1}>
      <group position={[0, props.posY, 0]}>
        <mesh
          className={`${props.posY}`}
          ref={refGroup}
          position={[40, 0, 0]}
          rotation={[0.25, 0, 0]}
        >
          {props.component}
        </mesh>
      </group>
    </Section>
  )
}

export default HtmlPart
