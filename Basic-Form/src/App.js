import React, { useState } from "react";
import "./index.css";

const App = () => {
  const [name, setName] = useState("");
  const [fullName, setFullName] = useState("");
  const InputEvent = (e) => {
    setName(e.target.value);
  };
  const Submit = () => {
    setFullName(name);
  };

  return (
    <>
      <h1> Hello, {fullName} </h1>
      <input
        type="text"
        placeholder="Enter Your Full Name"
        onChange={InputEvent}
        value={name}
      />
      <button onClick={Submit}>Click Me 💖 </button>
    </>
  );
};

export default App;
