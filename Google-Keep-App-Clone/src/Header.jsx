import React from "react";
import logo from "./logo.png";


const Header = () => {
  return (
    <>
      <div className="header_div">
        <img src={logo} alt="logo" width="60px" height="50px" />
        <h1>Google Keep App Clone</h1>
      </div>
    </>
  );
};

export default Header;
