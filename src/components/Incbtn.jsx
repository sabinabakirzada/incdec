import React from "react";
import "./Incbtn.css";
const Incbtn = ({ incFunc }) => {
  return (
    <div className="Inc">
      <button className="incbtn" onClick={incFunc}>
        Increase
      </button>
    </div>
  );
};

export default Incbtn;
