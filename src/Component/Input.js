import React from "react";

const Input = ({ addText }) => {
  //   console.log("input rendered");
  return (
    <div>
      {" "}
      <input
        type="text"
        onChange={addText}
        placeholder="Enter text"
        id="myInput"
      ></input>
    </div>
  );
};

export default Input;
