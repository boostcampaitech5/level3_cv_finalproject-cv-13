import React, { useState } from "react";
import * as s from "./Main_css";

//component
import Home from "../home/Home"
import About from "../about/About"
import Image from "../image/Image"

//ui
import Nav from "../../ui/Nav"

function Main() {
  const [state, setState] = useState("home")
  const homeState = (state) => {
    setState(state)
  }
  console.log(state)
  console.log(state == "three");

  return (
    <s.MainBackground>
      <Nav propFunc={homeState}/>
      {
        {
          home: <Home />,
          about: <About />,
          image: <Image />
        }[state]
      }
    </s.MainBackground>
  )
}

export default Main
