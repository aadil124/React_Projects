import React, { useState } from 'react';

const App = () => {

 const[count,setCount]=useState(1);
 const[res,setRes]=useState(2);
  const IncNum =()=>{
    setCount(count+1);
    setRes(res+2);
  }
  return (
      <>
      <h1> 2*{count}= {res}</h1>
      <button onClick={IncNum}> Click Me </button>
      </>
  );
};
export default App;