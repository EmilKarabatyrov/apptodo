import React from "react";
import TodoFooterList from "./TodoFooterList/TodoFooterList";
import "./TodoFooter.css";
import PropTypes from "prop-types";

const TodoFooter = ({ category, selectCategory, deleteAllCompleted }) => {
  TodoFooter.defaultProps = {
    category: [],
    selectCategory: () => {},
    deleteAllCompleted: () => {},
  };
  TodoFooter.propTypes = {
    category: PropTypes.array,
    selectCategory: PropTypes.func,
    deleteAllCompleted: PropTypes.func,
  };
  return (
    <footer className="footer">
      <span className="todo-count">1 items left</span>
      <TodoFooterList selectCategory={selectCategory} category={category} />
      <button onClick={deleteAllCompleted} className="clear-completed">
        Clear completed
      </button>
    </footer>
  );
};

export default TodoFooter;
