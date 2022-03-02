import React from "react";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import Button from "@material-ui/core/Button";


const AddNote = (props) => {
  return (
    <>
      <div className="AddNote_div">
        <div className="Note">
          <h1>{props.title}</h1><br/>
          <span>{props.content}</span>
          <Button>
            <DeleteOutlineIcon />
          </Button>
        </div>
      </div>
    </>
  );
};

export default AddNote;
