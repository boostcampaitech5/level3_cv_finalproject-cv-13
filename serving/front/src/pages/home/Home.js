import React, { useState } from "react";
import * as s from "./Home_css";
import Example from "./Example"

function Home() {
  const [state, setState] = useState("three")
  const mainState = (state) => {
    setState(state)
  }
  console.log(state)
  console.log(state == "three");

  return (
    <s.HomeBackground>
      <Example />
    </s.HomeBackground>
  )
}

export default Home
