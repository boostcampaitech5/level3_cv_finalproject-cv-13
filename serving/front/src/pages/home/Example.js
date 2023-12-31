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
  const [pointSize, setPointSize] = useState(0)

  const sizeUp = (e) => {
    setPointSize(pointSize + 0.01)
  }

  const sizeDown = (e) => {
    if (pointSize > 0) {
      setPointSize(pointSize - 0.01)
    }
  }

  return (
    <s.ExampleBackground>
      <s.PointSizeDiv>
        <s.PointSizeTextDiv>
          <s.TopPointSizeText>
            Dot
          </s.TopPointSizeText>
          <s.TopPointSizeText>
            Size
          </s.TopPointSizeText>
          <s.TopPointSizeText>
            Control
          </s.TopPointSizeText>
        </s.PointSizeTextDiv>
        
        <s.PointSizeUpBtn onClick={() => sizeUp()}>
          <s.PointSizeText>
            +
          </s.PointSizeText>
        </s.PointSizeUpBtn>
        <s.PointSizeDownBtn onClick={() => sizeDown()}>
          <s.PointSizeText>
            -
          </s.PointSizeText>
        </s.PointSizeDownBtn>
        <s.PointSizeViewDiv>
          <s.PointSizeText>
            {Math.round(pointSize*100)/100}
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