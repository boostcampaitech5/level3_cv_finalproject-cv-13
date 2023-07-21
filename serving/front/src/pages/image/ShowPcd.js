import { Canvas, useLoader } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { PCDLoader } from 'three-stdlib'
import * as s from "./ShowPcd_css";

function Points() {
  const points = useLoader(PCDLoader, 'img_dir/temp_pcd.pcd')
  return <primitive object={points} {...props} />
}

export default function ShowPcd(props) {
  return (
    <s.ShowPcdBackground>
      <Canvas
      camera={{ position: [3, 2, 0]}}>
        <Points pcd={props.pcd} rotation={[Math.PI/2, Math.PI, Math.PI/2]} material-size={0.001} material-color="white" />
        <OrbitControls autoRotate={true}/>
      </Canvas>
    </s.ShowPcdBackground>
  )
}