import React, { useState } from "react";
import "./index.css";

const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [allData, setAllData] = useState([]);

  const submitForm = (e) => {
    e.preventDefault();

    if (email && password) {
      const newentry = { email: email, password: password };
      setAllData([...allData, newentry]);
      setEmail("");
      setPassword("");
      setError("");
    } else {
      setError(" Please Enter Value");
    }

    // console.log(allData);
  };

  const removeData = (index) => {
    const remvData = allData.filter((cval, cindex) => {
      return cindex !== index;
    });

    setAllData(remvData);
  };

  return (
    <>
      <div className="main_div">
        <form onSubmit={submitForm} className="center_div">
          <div className="div1">
            <label>Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              placeholder="Enter Your Email Here"
              autoComplete="off"
              onChange={(e) => {
                setEmail(e.target.value);
                setError("");
              }}
            ></input>
          </div>
          <div className="div2">
            <label>Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              placeholder="Enter Your Password Here"
              autoComplete="off"
              onChange={(e) => {
                setPassword(e.target.value);
                setError("");
              }}
            ></input>
          </div>
          <span>{error}</span>
          <button type="submit">Login</button>
        </form>

        {allData.map((curval, index) => {
          return (
            <div className="Data">
              <span>{curval.email}</span>
              <span>{curval.password}</span>
              <button
                onClick={() => {
                  removeData(index);
                }}
              >
                Remove
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default App;
