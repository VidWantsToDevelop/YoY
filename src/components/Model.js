import React, { Suspense, useRef } from 'react'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import duck from '../ducks/duck.gltf'
import { useGLTF } from '@react-three/drei'

class Model extends React.Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef()
    this.state = {}
    this.loader.load('../ducks/duck.gltf')
  }

  render() {
    const { nodes, materials } = useGLTF('/duck.gltf')
    return (
      <Suspense fallback={null}>
        <primitive object={this.loader.scene} />
      </Suspense>
    )
  }
}

function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/duck.gltf')
}

export default Model
