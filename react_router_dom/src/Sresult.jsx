import React from "react";

const Sresult = (props) => {
  const img = `https://source.unsplash.com/random/300x280/?${props.name}`;
  return (
    <div className="img_div">
      <img src={img} alt="Image" />
    </div>
  );
};

export default Sresult;
