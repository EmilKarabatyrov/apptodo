import React from 'react';
import PropTypes from 'prop-types';

import TodoFooterList from './TodoFooterList/TodoFooterList';
import './TodoFooter.css';

function TodoFooter({ category, tasks, selectCategory, deleteAllCompleted }) {
  TodoFooter.defaultProps = {
    category: [],
    tasks: [],
    selectCategory: () => {},
    deleteAllCompleted: () => {},
  };
  TodoFooter.propTypes = {
    tasks: PropTypes.string,
    category: PropTypes.string,
    selectCategory: PropTypes.func,
    deleteAllCompleted: PropTypes.func,
  };
  return (
    <footer className="footer">
      <span className="todo-count">
        {tasks.filter((task) => !task.completed).length}
        {' '}
        items left
      </span>
      <TodoFooterList selectCategory={selectCategory} category={category} />
      <button type="button" onClick={deleteAllCompleted} className="clear-completed">
        Clear completed
      </button>
    </footer>
  );
}

export default TodoFooter;
