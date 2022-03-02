import React, { useState } from "react";

const App = () => {
  const myBioData = [
    { id: 1, Name: "Aadil", Age: "27", Deg: "M.Tech" },
    { id: 2, Name: "Aabid", Age: "26", Deg: "M.Tech" },
    { id: 3, Name: "Sameer", Age: "27", Deg: "B.E" },
  ];
  const [myArray, setMyArray] = useState(myBioData);

  const ClearData = () => {
    setMyArray([]);
  };

  const RemoveData=(id)=>{
    const myNewArray = myArray.filter((curelem)=>{return curelem.id === id;})
    setMyArray( myNewArray);

  };
    

  return (
    <div>
      {myArray.map((curelem) => {
        return (
          <>
          <h1 key={curelem.id}>
            Name:{curelem.Name} Age:{curelem.Age} Deg:{curelem.Deg}
           
          </h1>
          <button onClick={()=>RemoveData(curelem.id)}>Remove</button>
          </>
        );
      })}
      <br/>
      <button onClick={ClearData}>Clear</button>
    </div>
  );
};

export default App;
