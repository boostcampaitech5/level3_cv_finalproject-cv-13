import React, { useRef, useState, useEffect } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { colors } from '../design/design'

import * as s from "./navThree_css";
import { ttukpositions } from "./gukbobs/ttuk";
import { gukbobpositions } from "./gukbobs/gukbob"
import { phapositions } from "./gukbobs/pha"; 
import { gogipositions } from "./gukbobs/gogi";

function Ttukbaegi(props) {
  const meshRef = useRef()
  const dummy = new THREE.Object3D()
  const spheres = useRef([])
  const count = ttukpositions.length

  useEffect(() => {
    console.log('init mesh start')

    for (let i = 0; i < count; i++) {
      const sphere = {
        position : new THREE.Vector3(ttukpositions[i][1], ttukpositions[i][2], ttukpositions[i][0])
      }
      spheres.current.push(sphere)
    }

    spheres.current.forEach((sphere, i) => {
      dummy.position.copy(sphere.position)
      dummy.updateMatrix()
      meshRef.current.setMatrixAt(i, dummy.matrix)
    })
    meshRef.current.instanceMatrix.needsUpdate = true
  }, [])

  return (
        <instancedMesh 
        ref={meshRef} args={[null, null, count]}
        onClick={()=>props.propState('main')}>
          <sphereGeometry attach="geometry" args={[0.04, 6, 6]} />
          <meshStandardMaterial attach="material" color={colors.Black} />
        </instancedMesh>
  )
}

function Gukbob(props) {
  const meshRef = useRef()
  const dummy = new THREE.Object3D()
  const spheres = useRef([])
  const count = gukbobpositions.length

  useEffect(() => {
    console.log('init mesh start')

    for (let i = 0; i < count; i++) {
      const sphere = {
        position : new THREE.Vector3(gukbobpositions[i][1], gukbobpositions[i][2], gukbobpositions[i][0])
      }
      spheres.current.push(sphere)
    }

    spheres.current.forEach((sphere, i) => {
      dummy.position.copy(sphere.position)
      dummy.updateMatrix()
      meshRef.current.setMatrixAt(i, dummy.matrix)
    })
    meshRef.current.instanceMatrix.needsUpdate = true
  }, [])

  return (
        <instancedMesh 
        ref={meshRef} args={[null, null, count]}
        onClick={()=>props.propState('main')}>
          <sphereGeometry attach="geometry" args={[0.02, 6, 6]} />
          <meshStandardMaterial attach="material" color={colors.White} />
        </instancedMesh>
  )
}

function Pha(props) {
  const meshRef = useRef()
  const dummy = new THREE.Object3D()
  const spheres = useRef([])
  const count = phapositions.length

  useEffect(() => {
    console.log('init mesh start')

    for (let i = 0; i < count; i++) {
      const sphere = {
        position : new THREE.Vector3(phapositions[i][1], phapositions[i][2], phapositions[i][0])
      }
      spheres.current.push(sphere)
    }

    spheres.current.forEach((sphere, i) => {
      dummy.position.copy(sphere.position)
      dummy.updateMatrix()
      meshRef.current.setMatrixAt(i, dummy.matrix)
    })
    meshRef.current.instanceMatrix.needsUpdate = true
  }, [])

  return (
        <instancedMesh 
        ref={meshRef} args={[null, null, count]}
        onClick={()=>props.propState('main')}>
          <sphereGeometry attach="geometry" args={[0.02, 6, 6]} />
          <meshStandardMaterial attach="material" color={colors.Pha} />
        </instancedMesh>
  )
}

function Gogi(props) {
  const meshRef = useRef()
  const dummy = new THREE.Object3D()
  const spheres = useRef([])
  const count = gogipositions.length

  useEffect(() => {
    console.log('init mesh start')

    for (let i = 0; i < count; i++) {
      const sphere = {
        position : new THREE.Vector3(gogipositions[i][1], gogipositions[i][2], gogipositions[i][0])
      }
      spheres.current.push(sphere)
    }

    spheres.current.forEach((sphere, i) => {
      dummy.position.copy(sphere.position)
      dummy.updateMatrix()
      meshRef.current.setMatrixAt(i, dummy.matrix)
    })
    meshRef.current.instanceMatrix.needsUpdate = true
  }, [])

  return (
        <instancedMesh
        ref={meshRef} args={[null, null, count]}
        onClick={()=>props.propState('main')}>
          <sphereGeometry attach="geometry" args={[0.02, 6, 6]} />
          <meshStandardMaterial attach="material" color={colors.DarkWood} />
        </instancedMesh>
  )
}

export default function navThree(props) {
  return (
    <s.navBackground>
      <Canvas
      camera={{ position: [4, 2, 2]}}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[1, 0.7, 0.4]} />
        <directionalLight position={[-1, -0.7, -0.4]} />
        <OrbitControls autoRotate={true} screenSpacePanning={false} />
        <Ttukbaegi propState={props.propState}/>
        <Gukbob propState={props.propState}/>
        <Pha propState={props.propState}/>
        <Gogi propState={props.propState}/>
      </Canvas>
    </s.navBackground>
  )
}

