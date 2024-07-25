import React from 'react';
import PropTypes from 'prop-types';

import TodoFooterList from './TodoFooterList/TodoFooterList';

import './TodoFooter.css';

const TodoFooter = ({ category, tasks, selectCategory, deleteAllCompleted }) => {
  TodoFooter.defaultProps = {
    category: [],
    tasks: [],
    selectCategory: () => {},
    deleteAllCompleted: () => {},
  };
  TodoFooter.propTypes = {
    tasks: PropTypes.array,
    category: PropTypes.array,
    selectCategory: PropTypes.func,
    deleteAllCompleted: PropTypes.func,
  };
  return (
    <footer className="footer">
      <span className="todo-count">{tasks.filter((task) => !task.completed).length} items left</span>
      <TodoFooterList selectCategory={selectCategory} category={category} />
      <button onClick={deleteAllCompleted} className="clear-completed">
        Clear completed
      </button>
    </footer>
  );
};

export default TodoFooter;
