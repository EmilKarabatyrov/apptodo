import React from "react";
import TodoForm from "./TodoForm/TodoForm";
import TodoFooter from "../TodoFooter/TodoFooter";
import "./TodoMain.css";
const TodoMain = () => {
  return (
    <section className="main">
      <TodoForm className="todo-list" />
      <TodoFooter />
    </section>
  );
};

export default TodoMain;
