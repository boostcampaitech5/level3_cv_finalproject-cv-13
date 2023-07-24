import { Canvas, useLoader } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { PCDLoader } from 'three-stdlib'
import * as s from "./LoadPage_css";
import { useEffect } from 'react'

function Points(props) {
  // const points = useLoader(PCDLoader, `load_image_${props.seed}.pcd`)
  const points = useLoader(PCDLoader, `load_image.pcd`)

  return <primitive object={points} {...props} />
}

export default function LoadPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  })
  // const random_seed = Math.floor(Math.random()*5)
  // console.log(random_seed)
  return (
    <s.LoadPageBackground>
      <s.LoadPageTextDiv>
        <s.LoadPageText>
          Now Loading...Please Wait...
        </s.LoadPageText>
      </s.LoadPageTextDiv>
      <s.LoadPageImgDiv>
        <Canvas
        camera={{ position: [3, 2, 0]}}>
          {/* <Points seed={random_seed} rotation={[Math.PI/2, Math.PI, Math.PI/2]} material-size={0.01} material-color="white" /> */}
          <Points rotation={[Math.PI/2, Math.PI, Math.PI/2]} material-size={0.01} material-color="white" />
          <OrbitControls autoRotate={true}/>
        </Canvas>
      </s.LoadPageImgDiv>
    </s.LoadPageBackground>
  )
}