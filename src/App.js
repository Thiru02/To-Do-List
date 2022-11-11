import "./App.css";
import React, { useEffect, useState } from "react";
import Items from "./Component/Items";
import Input from "./Component/Input";
function App() {
  const [time, setTime] = useState("");
  const [text, setText] = useState("");
  const addText = (data) => {
    // console.log(data);
    setText(data.target.value);
  };
  const [list, setList] = useState(() => {
    return JSON.parse(window.localStorage.getItem("todoList")) || [];
  });

  const addtoList = () => {
    if (text) {
      setList((prev) => prev.concat({ text, completed: false }));
      setText("");
      document.getElementById("myInput").value = "";
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
            return { text: temp, completed: true };
          } else {
            let temp = val.text;
            return { text: temp, completed: false };
          }
        } else {
          console.log(val);
          return val;
        }
      });
      return newList;
    });
  };
  return (
    <div className="App">
      <div>{time}</div>
      <h1>TO DO LIST</h1>
      <label>
        <Input addText={addText} />
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
    </div>
  );
}

export default App;
