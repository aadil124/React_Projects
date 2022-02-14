import React, { useState } from "react";
import "./index.css";

const App = () => {
  const [fullName, setFullName] = useState({
    fname: "",
    lname: "",
    email: "",
    mob: "",
  });

  const InputText = (e) => {
    const { value, name, email, mob } = e.target;
    setFullName((preValue) => {
      return { ...preValue, [name]: value };
    

      // if (name === "fname") {
      //   return {
      //     fname: value,
      //     lname: preValue.lname,
      //     email: preValue.email,
      //     mob: preValue.mob

      //   };
      // } else if (name === "lname") {
      //   return {
      //     fname: preValue.fname,
      //     lname: value,
      //     email: preValue.email,
      //     mob: preValue.mob
      //   };
      // }else if (name === "email") {
      //   return {
      //     fname: preValue.fname,
      //     lname: preValue.lname,
      //     email: value,
      //     mob: preValue.mob
      //   };
      // } else if(name === "mob") {
      //   return {
      //     fname: preValue.fname,
      //     lname: preValue.lname,
      //     email: preValue.email,
      //     mob: value
      //   };
      // }
    });
  };

  const Submit = (e) => {
   
    e.preventDefault();
    
   
  };

  return (
    <>
      <div>
        <form onSubmit={Submit}>
          <div>
            <h1>
              Hello,{fullName.fname}
              {fullName.lname}
            </h1>
            <span>{fullName.email}</span>
            <span>{fullName.mob}</span>
            <input
              type="text"
              placeholder="Enter Your First Name"
              name="fname"
              onChange={InputText}
              // value={fullName.fname}
            />
            <br />
            <input
              type="text"
              placeholder="Enter Your Last Name"
              name="lname"
              onChange={InputText}
              // value={fullName.lname}
            />
            <input
              type="email"
              placeholder="Enter Your Email-Id"
              name="email"
              onChange={InputText}
              // value={fullName.email}
            />
            <br />
            <input
              type="number"
              placeholder="Enter Your Mobile Number"
              name="mob"
              onChange={InputText}
              // value={fullName.mob}
            />
            <button>Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default App;
