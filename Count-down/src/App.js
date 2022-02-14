import React from "react";
import Countdown from 'react-countdown';

const App=()=>{
  return(
    <>
    <h1 style={{textAlign:"center"}}>
  <Countdown date={Date.now() + 50000} />
  </h1>
    </>
  )
}

export default App;