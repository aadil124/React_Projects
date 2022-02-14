import React, { useState } from "react";
import "./index.css";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import RemoveIcon from "@material-ui/icons/Remove";
import Button from "@material-ui/core/Button";

const App = () => {
  const [num, setNum] = useState(0);

  const Inc = () => {
    setNum(num + 1);
  };
  const Dec = () => {
    setNum(num - 1);
    if (num === 0) {
      alert("Sorry!!! 👾");
      setNum(0);
    }
  };

  const Reset = () => {
    setNum(0);
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
        
          <h1>{num}</h1>
          <br />

          <Button onClick={Inc} variant="contained" id="add_btn">
            <AddIcon />
          </Button>
          <Button onClick={Dec} variant="contained" id="rem_btn">
            <RemoveIcon />
          </Button>
          <Button onClick={Reset} variant="contained" id="del_btn">
            <DeleteIcon />
          </Button>

          <button onClick={Inc}>
            <AddIcon />
          </button>
          <button onClick={Dec}>
            <RemoveIcon />
          </button>
        </div>
      </div>
    </>
  );
};

export default App;