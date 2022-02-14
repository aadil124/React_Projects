import React from "react";
import { useState } from "react/cjs/react.development";
import "./index.css";

const App = () => {

const [bcolor, setBcolor] = useState("yellow");
const [name, setName] = useState("Click Me");

const bgchange=()=>{
    setBcolor("red");
    setName("auuch! 😈")
}
 const bgback=()=>{
    setBcolor("green");
    setName("ohhh maaa! 🐍")

 }

  return (
    <>
    <div style={{backgroundColor: bcolor}}>
      <button onClick={bgchange} onDoubleClick={bgback}> {name}</button>
    </div>
    </>
  )
};

export default App;