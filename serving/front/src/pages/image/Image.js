import React, { useState } from 'react'
import * as s from './Image_css'
import SendImage from './sendImage/sendImage'
import LoadPage from './load_page/LoadPage'
import ShowPcd from './showPcd/ShowPcd'

export default function Image() {
  const [scroll, setScroll] = useState('hidden')
  const [state, setState] = useState('default')
  const [seed, setSeed] = useState(-1)

  const makeScroll = () => {
    setScroll('scroll')
  }

  const makeSeed = (e) => {
    setSeed(e)
  }

  const controlState = (e) => {
    setState(e)
    console.log(`state: ${state}`);
  }

  return (
    <s.ImageBackground>
    {
      {
        default: 
        <SendImage 
        setScroll={makeScroll} 
        scroll={scroll} 
        controlState={controlState}
        makeSeed={makeSeed}
        />,
        loading:
        <LoadPage />,
        pcd:
        <ShowPcd />
      }[state]
    }
    
    </s.ImageBackground>
  )
}
