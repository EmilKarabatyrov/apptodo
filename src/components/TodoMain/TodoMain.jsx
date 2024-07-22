import React from "react";
import TodoTaskList from "./TodoTaskList/TodoTaskList";
import TodoFooter from "../TodoFooter/TodoFooter";
import "./TodoMain.css";
import PropTypes from "prop-types";

const TodoMain = ({
  tasks,
  onClick,
  onDelete,
  category,
  selectCategory,
  deleteAllCompleted,
}) => {
  TodoMain.defaultProps = {
    tasks: [],
    onClick: () => {},
    onDelete: () => {},
    category: [],
    selectCategory: () => {},
    deleteAllCompleted: () => {},
  };

  TodoMain.propTypes = {
    tasks: PropTypes.array,
    onClick: PropTypes.func,
    onDelete: PropTypes.func,
    category: PropTypes.array,
    selectCategory: PropTypes.func,
    deleteAllCompleted: PropTypes.func,
  };
  return (
    <section className="main">
      <TodoTaskList tasks={tasks} onClick={onClick} onDelete={onDelete} />
      <TodoFooter
        tasks={tasks}
        deleteAllCompleted={deleteAllCompleted}
        selectCategory={selectCategory}
        category={category}
      />
    </section>
  );
};

export default TodoMain;
