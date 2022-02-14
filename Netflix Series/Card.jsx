 import React from "react";
import Heading from "./Heading";
import Images from "./Images";



function Card(props) {
  
  return (

    <div className="cards">
      <div className="card">
        <div className="card_img">
         <Images  imgsrc={props.imgsrc}/>
        </div>
        <div className="card_des">
          <span className="card_span">{props.cspan}</span>
          <Heading ctitle={props.ctitle}  />
          <a href={props.clink} target="_blank" className="btn">
              <button className="card_btn">Watch Now</button>
          </a>
        </div>
      </div>
    </div>
  );
}
export default Card;