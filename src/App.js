import React, { useState, useEffect } from "react";
import "./styles.css";
//importing components
import Form from "./Form.js";
import TodoList from "./TodoList.js";

function App() {
  //state stuff
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  //run once when the app starts
  useEffect(() => {
    // getLocalTodos();
  }, []);
  //use effect
  useEffect(() => {
    filterHandler();
  });

  //functions
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };
  //save to local
  // const saveLocalTodos = () => {
  //   if (localStorage.getItems("todos") === null) {
  //     localStorage.setItem("todos", JSON.stringify([]));
  //   } else {
  //     localStorage.setItem("todos", JSON.stringify(todos));
  //   }
  // };
  // const getLocalTodos = () => {
  //   if (localStorage.getItems("todos") === null) {
  //     localStorage.setItem("todos", JSON.stringify([]));
  //   } else {
  //     let todoLocal = JSON.parse(localStorage.getItem("todos"));
  //     console.log(todoLocal);
  //   }
  // };
  return (
    <div className="App">
      <header>
        <h1>Reena's Todo List</h1>
      </header>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <TodoList
        filteredTodos={filteredTodos}
        setTodos={setTodos}
        todos={todos}
      />
    </div>
  );
}
export default App;
