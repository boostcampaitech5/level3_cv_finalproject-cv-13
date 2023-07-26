import React, { useState } from "react";
import * as s from "./Home_css";
// import Example from "./Example"

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
            <s.HomePurposeDiv>
              <s.SwitchStateBtn onClick={() => changeState()}>
                <s.SwitchStateBtnText>
                  Show {state}
                </s.SwitchStateBtnText>
              </s.SwitchStateBtn>
              <s.HomeDivTitleText>
                Purpose
              </s.HomeDivTitleText>
      
              <s.HomeDivSubTitleText>
                SubTitle
              </s.HomeDivSubTitleText>
      
              <s.HomeDivContextText>
                context context context context context context context context context context context
              </s.HomeDivContextText>
      
              <s.HomeDivSubTitleText>
                SubTitle
              </s.HomeDivSubTitleText>
      
              <s.HomeDivContextText>
                context context context context context context context context
              </s.HomeDivContextText>
            </s.HomePurposeDiv>,
          Purpose:
            <s.HomeProcessDiv>
              <s.SwitchStateBtn onClick={() => changeState()}>
                <s.SwitchStateBtnText>
                  Show {state}
                </s.SwitchStateBtnText>
              </s.SwitchStateBtn>
              <s.HomeDivTitleText>
                Process
              </s.HomeDivTitleText>

              <s.HomeDivSubTitleText>
                SubTitle
              </s.HomeDivSubTitleText>

              <s.HomeDivContextText>
                context context context context context context context context context context context context context context context context context
              </s.HomeDivContextText>

              <s.HomeDivSubTitleText>
                SubTitle
              </s.HomeDivSubTitleText>

              <s.HomeDivContextText>
                context context context context context context context context context context context context context
              </s.HomeDivContextText>
            </s.HomeProcessDiv>
        }[state]
      }
      
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
    </s.HomeBackground>
  )
}

export default Home
