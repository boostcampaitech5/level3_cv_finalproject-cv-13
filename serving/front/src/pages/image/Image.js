import React, { useState } from 'react'
import * as s from './Image_css'
import SendImage from './sendImage/sendImage'

export default function Image() {
  const [scroll, setScroll] = useState('hidden')
  const makeScroll = () => {
    setScroll('scroll')
  }

  return (
    <s.ImageBackground>
      <SendImage setScroll={makeScroll} scroll={scroll} />
    </s.ImageBackground>
  )
}
