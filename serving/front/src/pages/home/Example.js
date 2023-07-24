import { Canvas, useLoader } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { PCDLoader } from 'three-stdlib'
import * as s from "./Example_css";
import { useState } from "react";

function Points(props) {
  const points = useLoader(PCDLoader, 'RGB1.pcd')
  return <primitive object={points} {...props} />
}

export default function Example() {
  const [pointSize, setPointSize] = useState(0.001)

  const sizeUp = (e) => {
    setPointSize(pointSize + 0.005)
  }

  const sizeDown = (e) => {
    if (pointSize > 0.005) {
      setPointSize(pointSize - 0.005)
    }
  }

  return (
    <s.ExampleBackground>
      <s.PointSizeDiv>
        <s.PointSizeUpBtn onClick={() => sizeUp()}>
          <s.PointSizeText>
            Size Up
          </s.PointSizeText>
        </s.PointSizeUpBtn>
        <s.PointSizeDownBtn onClick={() => sizeDown()}>
          <s.PointSizeText>
            Size Down
          </s.PointSizeText>
        </s.PointSizeDownBtn>
        <s.PointSizeViewDiv>
          <s.PointSizeText>
            {Math.floor(pointSize*10000)/10000}
          </s.PointSizeText>
        </s.PointSizeViewDiv>
      </s.PointSizeDiv>
      <s.ExampleImageDiv>
        <Canvas
        camera={{ position: [3, 2, 0]}}>
          <Points rotation={[Math.PI/2, Math.PI, Math.PI/2]} material-size={pointSize} material-color="white" />
          <OrbitControls autoRotate={true}/>
        </Canvas>
      </s.ExampleImageDiv>
    </s.ExampleBackground>
  )
}