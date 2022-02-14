import React, { useState } from "react";
import "./index.css";

const App = () => {
  const [fname, setName] = useState("");
  const [fName, setFirstName] = useState("");
  const [lname, setlname] = useState("");
  const [lName, setLastName] = useState("");

  const InputEvent = (e) => {
    setName(e.target.value);
  };
  const InputEventTwo = (e) => {
    setlname(e.target.value);
  };

  const Submit = (e) => {
    e.preventDefault();
    setFirstName(fname);
    setLastName(lname);
  };

  return (
    <>
      <div>
        <form onSubmit={Submit}>
          <div>
            <h1>
              {" "}
              Hello, {fName} {lName}{" "}
            </h1>
            <input
              type="text"
              placeholder="Enter Your First Name"
              onChange={InputEvent}
              value={fname}
            />
            <br />
            <input
              type="text"
              placeholder="Enter Your Last Name"
              onChange={InputEventTwo}
              value={lname}
            />
            <button>Click Me 💖 </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default App;