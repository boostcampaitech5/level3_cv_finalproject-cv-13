import { Canvas, useLoader } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { PCDLoader } from 'three-stdlib'
import * as s from "./LoadPage_css";
import { useEffect } from 'react'
import { colors } from '../../../design/design'


function Points(props) {
  const points = useLoader(PCDLoader, 'loading.pcd')
  return <primitive object={points} {...props} />
}

export default function LoadPage() {
  return (
    <s.LoadPageBackground>
      <s.LoadPageImgDiv>
        <Canvas
        camera={{ position: [-3, 0, 0]}}>
          {/* <Points seed={random_seed} rotation={[Math.PI/2, Math.PI, Math.PI/2]} material-size={0.01} material-color="white" /> */}
          <Points rotation={[Math.PI, -Math.PI/2, Math.PI/2]} material-size={0.01} material-color={colors.Else} />
          <OrbitControls autoRotate={true}/>

        </Canvas>
      </s.LoadPageImgDiv>
    </s.LoadPageBackground>
  )
}