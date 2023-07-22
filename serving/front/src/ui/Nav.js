import React, { useEffect, useState } from 'react'
import * as s from "./Nav_css";

export default function Nav(props) {
  const [homeColor, setHomeColor] = useState(true)
  const [aboutColor, setAboutColor] = useState(false)
  const [imageColor, setImageColor] = useState(false)

  return (
    <s.NavBackground>
      <s.NavTextDiv>
        <s.NavText
        onClick={() => {
          props.propFunc('home')
          setHomeColor(true)
          setAboutColor(false)
          setImageColor(false)
        }}
        color={homeColor}>
          HOME
        </s.NavText>
      </s.NavTextDiv>

      <s.NavTextDiv>
        <s.NavText
        onClick={() => {
          props.propFunc('about')
          setHomeColor(false)
          setAboutColor(true)
          setImageColor(false)
        }}
        color={aboutColor}>
          ABOUT
        </s.NavText>
      </s.NavTextDiv>

      <s.NavTextDiv>
        <s.NavText
        onClick={() => {
          props.propFunc('image')
          setHomeColor(false)
          setAboutColor(false)
          setImageColor(true)
        }}
        color={imageColor}>
          IMAGE
        </s.NavText>
      </s.NavTextDiv>
    </s.NavBackground>
  )
}
