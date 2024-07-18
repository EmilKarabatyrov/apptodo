import React from "react";
import TodoFooterList from "./TodoFooterList/TodoFooterList";
import "./TodoFooter.css";
const TodoFooter = () => {
  return (
    <footer className="footer">
      <span className="todo-count">1 items left</span>
      <TodoFooterList className="filters" />
      <button className="clear-completed">Clear completed</button>
    </footer>
  );
};

export default TodoFooter;
