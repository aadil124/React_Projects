import React, { useState } from "react";
import Footer from "./Footer";
import CreatNote from "./CreatNote";
import Header from "./Header";
import AddNote from "./AddNote";
import "./index.css";

const App = (props) => {
  const [addItem, setAddItem] = useState([]);

  const addNote = (note) => {
    setAddItem((preVal) => {
      return [...preVal, note];
    });
  };

  return (
    <div className="main_div">
      <Header />
      <CreatNote passNote={addNote} />
      <br />
      <br />

      {addItem.map((val, index) => {
        return (
          <AddNote
            key={index}
            id={index}
            title={val.title}
            content={val.content}
          />
        );
      })}
      <Footer />
    </div>
  );
};

export default App;
