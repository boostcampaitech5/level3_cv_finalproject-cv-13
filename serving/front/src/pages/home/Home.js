import { Canvas, useLoader } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { PCDLoader } from 'three-stdlib'
import React, { useState } from "react";
import * as s from "./Home_css";
// import Example from "./Example"

function Points1(props) {
  // const points = useLoader(PCDLoader, `main_pcd_${props.num}.pcd`)
  const points = useLoader(PCDLoader, 'main_pcd_1.pcd')

  return <primitive object={points} {...props} />
}

function Points2(props) {
  // const points = useLoader(PCDLoader, `main_pcd_${props.num}.pcd`)
  const points = useLoader(PCDLoader, 'main_pcd_2.pcd')

  return <primitive object={points} {...props} />
}

function Points3(props) {
  // const points = useLoader(PCDLoader, `main_pcd_${props.num}.pcd`)
  const points = useLoader(PCDLoader, 'main_pcd_3.pcd')

  return <primitive object={points} {...props} />
}

function Points4(props) {
  // const points = useLoader(PCDLoader, `main_pcd_${props.num}.pcd`)
  const points = useLoader(PCDLoader, 'main_pcd_4.pcd')

  return <primitive object={points} {...props} />
}

function Home() {
  const [state, setState] = useState('Process')
  const changeState = (() => {
    if (state === 'Purpose') {
      setState('Process')
    } else {
      setState('Purpose')
    }
  })

  return (
    <s.HomeBackground>
      {/* <Example /> */}
      {
        {
          Process:
            <>
              <s.HomePurposeDiv>
                <s.SwitchStateBtn onClick={() => changeState()}>
                  <s.SwitchStateBtnText>
                    Show {state}
                  </s.SwitchStateBtnText>
                </s.SwitchStateBtn>
                <s.HomeDivTitleText>
                  Save your memory with PocketHome!
                </s.HomeDivTitleText>
        
                <s.HomeDivContextText>
                추억을 간직하는 방식에는 사진, 동영상, 그림 등 여러 방법이 있습니다.
                </s.HomeDivContextText>
                <s.HomeDivContextText>
                  PocketHome은 여러분의 추억에 현장감을 한층 더 더해줄 수 있습니다.
                </s.HomeDivContextText>
                <s.HomeDivContextText>
                  PocketHome이 제공하는 3D Reconstruction 기술을 활용하여 당신의 추억에 공간감을 더해 보세요.
                </s.HomeDivContextText>
              </s.HomePurposeDiv>
                    <s.MainPcdDiv>

      
              <s.MainPcdImageDiv>
                <Canvas
                camera={{ position: [5, 3, 0]}}>
                  <Points2 rotation={[Math.PI/2, Math.PI, Math.PI/2]} material-size={0.01} material-color="white" />
                  <OrbitControls autoRotate={true}/>
                </Canvas>
              </s.MainPcdImageDiv>
      
              <s.MainPcdImageDiv>
                <Canvas
                camera={{ position: [5, 3, 0]}}>
                  <Points3 rotation={[Math.PI/2, Math.PI, Math.PI/2]} material-size={0.01} material-color="white" />
                  <OrbitControls autoRotate={true}/>
                </Canvas>
              </s.MainPcdImageDiv>
      
              <s.MainPcdImageDiv>
                <Canvas
                camera={{ position: [0.5, 0, 0]}}>
                  <Points1 rotation={[Math.PI/2, Math.PI, Math.PI/2]} material-size={0.05} material-color="white" />
                  <OrbitControls autoRotate={true}/>
                </Canvas>
              </s.MainPcdImageDiv>

              <s.MainPcdImageDiv>
                <Canvas
                camera={{ position: [0.5, 0, 0]}}>
                  <Points4 rotation={[Math.PI/2, Math.PI, Math.PI/2]} material-size={0.05} material-color="white" />
                  <OrbitControls autoRotate={true}/>
                </Canvas>
              </s.MainPcdImageDiv>
      
            </s.MainPcdDiv>
          </>,
          Purpose:
            <>
              <s.HomeSequenceDiv>
                <s.HomeDivTitleText>
                  실행방법
                </s.HomeDivTitleText>
        
                <s.HomeDivSequenceText>
                  1. IMAGE 탭으로 이동
                </s.HomeDivSequenceText>
                <s.HomeDivSequenceText>
                  2. 버튼을 클릭해 이미지를 삽입
                </s.HomeDivSequenceText>
                <s.HomeDivSequenceText>
                  3. 옳은 이미지를 삽입했는지 확인 후 버튼 클릭
                </s.HomeDivSequenceText>
                <s.HomeDivSequenceText>
                  4. 로딩 이미지를 가지고 놀며 대기
                </s.HomeDivSequenceText>
                <s.HomeDivSequenceText>
                  5. 출력된 이미지를 확인
                </s.HomeDivSequenceText>
              </s.HomeSequenceDiv>

              <s.HomeSequenceDiv>
                <s.SwitchStateBtn onClick={() => changeState()}>
                  <s.SwitchStateBtnText>
                    Show {state}
                  </s.SwitchStateBtnText>
                </s.SwitchStateBtn>
                
                <s.HomeDivTitleText>
                  How to run
                </s.HomeDivTitleText>

                <s.HomeDivSequenceText>
                  1. Go to Image tab
                </s.HomeDivSequenceText>
                <s.HomeDivSequenceText>
                  2. Insert image by clicking the button
                </s.HomeDivSequenceText>
                <s.HomeDivSequenceText>
                  3. Check your image and click the button
                </s.HomeDivSequenceText>
                <s.HomeDivSequenceText>
                  4. Play around with the loading image and wait
                </s.HomeDivSequenceText>
                <s.HomeDivSequenceText>
                  5. Check the printed image
                </s.HomeDivSequenceText>
              </s.HomeSequenceDiv>
            </>
        }[state]
      }
    </s.HomeBackground>  
  )
}

export default Home
