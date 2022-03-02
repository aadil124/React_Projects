import React, { useState } from "react";
import "./index.css";
import Sresult from "./Sresult";


const Search = (props) => {
  const [img, setImg] = useState("");

  const InputEvent = (event) => {
      const data=event.target.value
    setImg(data);
  };
  return (
    <>
      <div className="input_div">
        <input
          type="text"
          placeholder="Search here..."
          value={img}
          onChange={InputEvent}
        />
      </div>
      {img==="" ? null: <Sresult name={img}/>}
     
    </>
  );
};

export default Search;
