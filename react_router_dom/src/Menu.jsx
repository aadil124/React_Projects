import React from "react";
import { NavLink } from "react-router-dom";
import "./index.css";

const Menu = () => {
  return (
    <>
    <div className="Nav_div">
      <NavLink  className="active_class" to="/">About Us</NavLink>
      <NavLink  className="active_class" to="/contact">Contact Us</NavLink>
      <NavLink  className="active_class" to="/service">Service</NavLink>
      <NavLink  className="active_class" to="/search">Search</NavLink>
      </div>
    </>
  );
};

export default Menu;
