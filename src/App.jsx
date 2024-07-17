import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Edit from "./components/Edit";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  const [todos, setTodos] = useState(
    localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : []
  );
  return (
  <Router>
    <Navbar /> 
    <Routes>
      <Route path="/" element={<Home />}> </Route>
      <Route path="/make" element={<TodoForm todos={todos} setTodos={setTodos} />}></Route>
      <Route path="/todos" element={<TodoList todos={todos} setTodos={setTodos}  />}> </Route>  
      <Route path="/edit/:id" element={<Edit todos={todos} setTodos={setTodos}  />}> </Route>  
    </Routes>
  </Router>
  )
};

export default App;
