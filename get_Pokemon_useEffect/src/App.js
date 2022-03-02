import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [num, setNum] = useState();
  const [name, setName] = useState();
  const [moves, setMoves] = useState();
  const [smoves, setSmoves] = useState();

  useEffect(() => {
    async function getData() {
      const response = await axios.get(
        ` https://pokeapi.co/api/v2/pokemon/${num}`
      );
      // console.log(response.data.moves[0].move);
      setName(response.data.name);
      setMoves(response.data.moves.length);
      setSmoves(response.data.moves[0].move.name);
    }
    getData();
  });

  return (
    <>
      <h1>
        You have chosen <span style={{ color: "red" }}>{num}</span> value
      </h1>
      <h1>
        My Name is <span style={{ color: "red" }}>{name} </span>
      </h1>
      <h1>
        I have <span style={{ color: "red" }}>{moves}</span> moves
      </h1>
      <h1>
        I have Special <span style={{ color: "red" }}>{smoves}</span> move
      </h1>
      <select
        value={num}
        onChange={(event) => {
          setNum(event.target.value);
        }}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="25">25</option>
      </select>
    </>
  );
};
export default App;
