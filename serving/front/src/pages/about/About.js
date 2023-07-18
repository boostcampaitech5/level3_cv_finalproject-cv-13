import React, { useState } from 'react'
import * as s from './About_css'

// component
import Research from './item/Research'
import Team from './item/Team'
import Process from './item/Process'

export default function About() {
  const [state, setState] = useState("research")

  return (
    <s.AboutBackground>
      <s.AboutItemDiv>
        <s.AboutItemTextDiv>
          <s.AboutItemText
          onClick={() => setState("research")}>
            RESEARCH
          </s.AboutItemText>
        </s.AboutItemTextDiv>

        <s.AboutItemTextDiv>
          <s.AboutItemText
          onClick={() => setState("process")}>
            PROCESS
          </s.AboutItemText>
        </s.AboutItemTextDiv>

        <s.AboutItemTextDiv>
          <s.AboutItemText
          onClick={() => setState("team")}>
            TEAM
          </s.AboutItemText>
        </s.AboutItemTextDiv>
      </s.AboutItemDiv>

      <s.AboutContextDiv>
        {
          {
            research: <Research />,
            process: <Process />,
            team: <Team />
          }[state]
        }
      </s.AboutContextDiv>
    </s.AboutBackground>
  )
}
