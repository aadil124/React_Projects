import React from 'react';
import { useState } from 'react';
import "./App.css";

const App = () => {

let date = new Date().toLocaleTimeString();

const[time,setTime]=useState(date);
    const getTime =()=>{
       let cdate = new Date().toLocaleTimeString();
        setTime(cdate);
    }

setInterval(getTime,1000);  /*Automatic time update hote rahe ga...agar setInterval ka use kiye to  */

  return(

<>
<h1> {time} </h1>

{/* <button onClick={getTime}>Get Time</button>  /*button ke click per time update hoga */}

</>

  );
};
export default App;