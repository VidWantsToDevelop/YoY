/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Maria Beatriz (https://sketchfab.com/Banana.Grill)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/post-duck-53a839ce1ce84fe9b1cfb136e89c461b
title: Post Duck
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/postDuck.gltf')
  return (
    <group ref={group} {...props} dispose={null} scale={0.1}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group
            position={[-377.14, 0, -75.9]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          >
            <mesh
              geometry={nodes.Cube007_Material_0.geometry}
              material={materials.Material}
            />
          </group>
          <group
            position={[-379.48, 230.64, 53.71]}
            rotation={[1.23, 0.04, 2.87]}
            scale={[62.03, 62.03, 67.24]}
          >
            <mesh
              geometry={nodes.Plane004_Material_0.geometry}
              material={materials.Material}
            />
          </group>
          <group
            position={[-381.79, 286.24, 34.08]}
            rotation={[1.23, 0.04, 2.67]}
            scale={[62.03, 62.03, 67.24]}
          >
            <mesh
              geometry={nodes.Plane005_Material_0.geometry}
              material={materials.Material}
            />
          </group>
          <group
            position={[-384.64, 326.28, 15.55]}
            rotation={[1.1, 0.08, -0.26]}
            scale={[3.69, 3.69, 41.69]}
          >
            <mesh
              geometry={nodes.Cube008_Material_0.geometry}
              material={materials.Material}
            />
          </group>
          <group
            position={[-240.56, -20.15, -90.93]}
            rotation={[-0.88, -0.12, 0.39]}
            scale={[33.38, 69.72, 53.67]}
          >
            <mesh
              geometry={nodes.Cube009_Material_0.geometry}
              material={materials.Material}
            />
          </group>
          <group
            position={[-240.56, -20.15, -90.93]}
            rotation={[-0.88, -0.12, 0.39]}
            scale={[33.38, 69.72, 53.67]}
          >
            <mesh
              geometry={nodes.Cube010_Material_0.geometry}
              material={materials.Material}
            />
          </group>
          <group
            position={[-194.41, -74.21, -94.12]}
            rotation={[-0.88, -0.12, 0.39]}
            scale={[33.38, 69.72, 53.67]}
          >
            <mesh
              geometry={nodes.Cube011_Material_0.geometry}
              material={materials.Material}
            />
          </group>
          <group
            position={[-526.13, -42.97, 109.08]}
            rotation={[-1.96, 0.33, -0.15]}
            scale={[28.12, 59.75, 59.75]}
          >
            <mesh
              geometry={nodes.Cube012_Material_0.geometry}
              material={materials.Material}
            />
          </group>
          <group
            position={[-520.29, -34.19, 105.59]}
            rotation={[0.87, 1.09, -2.84]}
            scale={[22.58, 22.62, 28.42]}
          >
            <mesh
              geometry={nodes.Plane006_Material_0.geometry}
              material={materials.Material}
            />
          </group>
          <group
            position={[-207.02, -108.25, -86.56]}
            rotation={[-0.97, -0.48, 0.25]}
            scale={[3.83, 3.83, 2.64]}
          >
            <mesh
              geometry={nodes.Cube013_Material_0.geometry}
              material={materials.Material}
            />
          </group>
          <group
            position={[-216.09, -79.81, -129.03]}
            rotation={[-0.98, -0.48, 0.25]}
            scale={[3.83, 3.83, 2.64]}
          >
            <mesh
              geometry={nodes.Cube014_Material_0.geometry}
              material={materials.Material}
            />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/postDuck.gltf')
