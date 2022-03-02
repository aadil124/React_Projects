import React, { useState } from "react";
import "./index.css";
const CreatNote = (props) => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const InputEvent = (event) => {
    // const value= event.target.value
    // const name= event.target.name
    const { name, value } = event.target;

    setNote((preData) => {
      return {
        ...preData,
        [name]: value,
      };
    });
  };

  const AddEvent = () => {
    props.passNote();
  };
  const Submit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="CreatNote_div">
        <div className="form_div">
          <form onSubmit={Submit}>
            <input
              type="text"
              placeholder="Title"
              autoComplete="off"
              name="title"
              value={note.title}
              onChange={InputEvent}
            />
            <br />
            <textarea
              rows=""
              column=""
              type="text"
              placeholder="Write note here..."
              name="content"
              value={note.content}
              onChange={InputEvent}
            />
            <br />
            <button className="plus_sign" onClick={AddEvent}>
              ➕
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default CreatNote;
