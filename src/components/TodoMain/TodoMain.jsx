import React from "react";
import TodoTaskList from "./TodoForm/TodoTaskList";
import TodoFooter from "../TodoFooter/TodoFooter";
import "./TodoMain.css";
const TodoMain = ({ tasks, onClick, onDelete }) => {
  return (
    <section className="main">
      <TodoTaskList tasks={tasks} onClick={onClick} onDelete={onDelete} />
      <TodoFooter />
    </section>
  );
};

export default TodoMain;
