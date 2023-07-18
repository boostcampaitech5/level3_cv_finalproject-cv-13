import React from 'react'
import * as s from "./Nav_css";

export default function Nav(props) {
  return (
    <s.NavBackground>
      <s.NavTextDiv>
        <s.NavText
        onClick={() => props.propFunc('home')}>
          HOME
        </s.NavText>
      </s.NavTextDiv>

      <s.NavTextDiv>
        <s.NavText
        onClick={() => props.propFunc('about')}>
          ABOUT
        </s.NavText>
      </s.NavTextDiv>

      <s.NavTextDiv>
        <s.NavText
        onClick={() => props.propFunc('image')}>
          IMAGE
        </s.NavText>
      </s.NavTextDiv>
    </s.NavBackground>
  )
}
