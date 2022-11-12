import React from "react";

const Items = (props) => {
  const value = props.idx;
  // console.log("item rendered");
  //   console.log(props);
  // console.log(complete);
  return (
    <div
      className={`Items1 ${props.a.completed ? "complete" : ""}`}
      value={value}
    >
      {props.a.text}
      <button
        onClick={() => {
          return props.remove(props.idx);
        }}
      >
        X
      </button>
      <button
        value={value}
        onClick={() => {
          props.completed(props.idx);
        }}
      >
        ✓
      </button>
      <br />
      {props.a.date} {props.a.time1}
      {/* <button onClick={()=>props.edit(props.idx)}>Edit</button> */}
    </div>
  );
};

export default Items;
