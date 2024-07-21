import React, { useState } from "react";
import "./TodoHeader.css";
import PropTypes from "prop-types";

const TodoHeader = ({ addTodo }) => {
  TodoHeader.defaultProps = {
    addTodo: () => {},
  };
  TodoHeader.propTypes = {
    addTodo: PropTypes.func,
  };

  const [value, setValue] = useState("");
  const addNewTodo = (e) => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  };
  return (
    <header className="header">
      <h1>todos</h1>
      <form onSubmit={addNewTodo}>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
        />
      </form>
    </header>
  );
};

export default TodoHeader;
