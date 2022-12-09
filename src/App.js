import "./App.css";
import React, { useEffect, useState } from "react";
import Items from "./Component/Items";
import Input from "./Component/Input";
function App() {
  const [time1, setTime1] = useState(new Date().toLocaleTimeString());
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [date1, setDate1] = useState("");
  const [text, setText] = useState("");
  const addText = (data) => {
    setTime1(new Date().toLocaleTimeString());
    setDate(new Date().toLocaleDateString());
    // console.log(data);
    setText(data.target.value);
  };
  const [list, setList] = useState(() => {
    return JSON.parse(window.localStorage.getItem("todoList")) || [];
  });

  const addtoList = () => {
    if (text) {
      setList((prev) =>
        prev.concat({ text, completed: false, date, time1: time1 })
      );
      setText("");
      document.getElementById("myInput").value = "";
    }
  };
  const keyDown = (val) => {
    if (val.keyCode === 13) {
      addtoList();
    }
  };
  const remove = (n) => {
    setList((prev) => {
      let newArr = [...prev];
      newArr.splice(n, 1);
      return newArr;
    });
  };
  // const edit = (data) => {
  //   setText((prev) => prev + text);
  // };
  // useEffect(() => {
  //   let localList = JSON.parse(window.localStorage.getItem("todoList"));
  //   if (localList) {
  //     setList(localList);
  //   }
  // }, []);
  useEffect(() => {
    window.localStorage.setItem("todoList", JSON.stringify(list));
  }, [list]);

  // console.log("App rendered");
  useEffect(() => {
    setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
    setInterval(() => setDate1(new Date().toLocaleDateString()), 1000);
  }, []);
  // const [dateState, setDateState] = useState(new Date());
  // useEffect(() => {
  //   setInterval(() => setDateState(new Date()), 500);
  // }, []);
  const completed = (idx) => {
    setList((prev) => {
      const newList = prev.map((val, idx1) => {
        if (idx === idx1) {
          if (val.completed === false) {
            let temp = val.text;
            return {
              text: temp,
              completed: true,
              date: val.date,
              time1: val.time1,
            };
          } else {
            let temp = val.text;
            return {
              text: temp,
              completed: false,
              date: val.date,
              time1: val.time1,
            };
          }
        } else {
          // console.log(val);
          return val;
        }
      });
      return newList;
    });
  };
  // const edit = (idx)=>{

  // }
  return (
    <div className="App">
      <div>{date1}</div>
      <>between</>
      <div>{time}</div>
      <h1>TO DO LIST</h1>
      <label>
        <Input addText={addText} keyDown={keyDown} />
        <button type="button" onClick={addtoList}>
          add
        </button>
      </label>
      {/* <p>{text}</p> */}
      <div className="Items">
        {list?.map((a, idx) => {
          // console.log(idx);
          return (
            <Items
              list={list}
              key={idx}
              a={a}
              idx={idx}
              remove={remove}
              completed={completed}
              //  edit={edit}
            />
          );
        })}
      </div>
      <>Hi</>
    </div>
  );
}

export default App;
