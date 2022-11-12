import React from "react";

const Input = (props) => {
  //   console.log("input rendered");
  return (
    <div>
      {" "}
      <input
        type="text"
        onChange={props.addText}
        placeholder="Enter text"
        id="myInput"
        onKeyDown={props.keyDown}
      ></input>
    </div>
  );
};

export default Input;
