import React from "react";
import { useState } from "react";
import Decbtn from "./components/Decbtn";
import Incbtn from "./components/Incbtn";
import "./App.css";
const App = () => {
  const [count, setCount] = useState(0);

  const incFunc = () => {
    setCount(count + 1);
  };
  const decFunc = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <input className="inp" type="text" value={count} />

      <Incbtn incFunc={incFunc} />
      <Decbtn decFunc={decFunc} />
    </div>
  );
};

export default App;
