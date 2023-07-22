import React, { useState } from 'react'
import * as s from './About_css'

// component
import Research from './item/Research'
import Team from './item/Team'
import Process from './item/Process'

export default function About() {
  const [state, setState] = useState("research")
  const [researchColor, setResearchColor] = useState(true)
  const [processColor, setProcessColor] = useState(false)
  const [teamColor, setTeamColor] = useState(false)

  return (
    <s.AboutBackground>
      <s.AboutItemDiv>
        <s.AboutItemTextDiv>
          <s.AboutItemText
          onClick={() => {
            setState("research")
            setResearchColor(true)
            setProcessColor(false)
            setTeamColor(false)
          }}
          color={researchColor}
          >
            RESEARCH
          </s.AboutItemText>
        </s.AboutItemTextDiv>

        <s.AboutItemTextDiv>
          <s.AboutItemText
          onClick={() => {
            setState("process")
            setResearchColor(false)
            setProcessColor(true)
            setTeamColor(false)
          }}
          color={processColor}
          >
            PROCESS
          </s.AboutItemText>
        </s.AboutItemTextDiv>

        <s.AboutItemTextDiv>
          <s.AboutItemText
          onClick={() => {
            setState("team")
            setResearchColor(false)
            setProcessColor(false)
            setTeamColor(true)
          }}
          color={teamColor}
          >
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
