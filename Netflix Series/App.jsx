import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";

const App= () => {
  return (
    <>
      <h1 className="heading">A List of Netflix Series</h1>,
      {Sdata.map((val) => {
        return (
          <Card
            key={val.id}
            imgsrc={val.img}
            cspan={val.span}
            ctitle={val.title}
            clink={val.link}
          />
        );
      })}
    </>
  );
}

export default App;