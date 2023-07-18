import { Canvas, useLoader } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { PCDLoader } from 'three-stdlib'
import * as s from "./Example_css";

function Points(props) {
  const points = useLoader(PCDLoader, 'RGB1.pcd')
  return <primitive object={points} {...props} />
}

export default function Example() {
  return (
    <s.ExampleBackground>
      <Canvas
      camera={{ position: [3, 2, 0]}}>
        <Points rotation={[Math.PI/2, Math.PI, Math.PI/2]} material-size={0.001} material-color="white" />
        <OrbitControls autoRotate={true}/>
      </Canvas>
    </s.ExampleBackground>
  )
}