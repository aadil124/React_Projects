import React, { useEffect, useState } from "react";

const App = () => {
  const [num, setNum] = useState(0);
  useEffect(() => {
    document.title = `you have cliked me ${num} times`;
  });
  return (
    <button
      style={{ fontSize: "50px" }}
      onClick={() => {
        setNum(num + 1);
      }}
    >
      Click Me {num}
    </button>
  );
};

export default App;
