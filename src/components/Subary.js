/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: zackw (https://sketchfab.com/zackw)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/oozora-subaru-shuba-shuba-rigged-4e3af3ff2a7242609e5c507576de8e35
title: Oozora Subaru- Shuba Shuba Rigged
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/subary.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[3.09, -6.98, 44.44]} scale={0.11}>
            <primitive object={nodes._rootJoint} />
            <skinnedMesh
              geometry={nodes.Object_7.geometry}
              material={materials.eyes}
              skeleton={nodes.Object_7.skeleton}
            />
            <skinnedMesh
              geometry={nodes.Object_8.geometry}
              material={materials.yellow}
              skeleton={nodes.Object_8.skeleton}
            />
            <skinnedMesh
              geometry={nodes.Object_9.geometry}
              material={materials.white}
              skeleton={nodes.Object_9.skeleton}
            />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/subary.gltf')
