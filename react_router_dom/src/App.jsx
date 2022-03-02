import React from "react";
import { Route,Routes } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import Menu from "./Menu";
import Search from "./Search";
import Service from "./Service";



const App = () => {
  return (
    <>
    <Menu/>
    <Routes>
      <Route  path="/" element={<About/>}/>
      <Route  path="/contact" element={<Contact/>}/>
      <Route  path="/*" element={<Error/>}/>
      <Route  path="/service" element={<Service/>}/>
      <Route  path="/search" element={<Search/>}/>
    </Routes>

    </>
  );
};

export default App;
