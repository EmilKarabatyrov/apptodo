import React from "react";
import "./TodoForm.css";
import TodoTaskCompleted from "./TodoTasks/TodoTaskCompleted";
import TodoTaskEditing from "./TodoTasks/TodoTaskEditing";
import TodoTaskActive from "./TodoTasks/TodoTaskActive";
const TodoForm = ({ className }) => {
  return (
    <ul className={className}>
      <TodoTaskCompleted className="completed" />
      <TodoTaskEditing className="editing" />
      <TodoTaskActive />
    </ul>
  );
};

export default TodoForm;
