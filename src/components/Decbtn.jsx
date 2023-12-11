import React from "react";
import "./Decbtn.css";

const Decbtn = ({ decFunc }) => {
  return (
    <div>
      <button className="decbtn" onClick={decFunc}>
        Decrease
      </button>
    </div>
  );
};

export default Decbtn;
