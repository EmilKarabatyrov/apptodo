import React from 'react';
import PropTypes from 'prop-types';

import TodoFooter from '../TodoFooter/TodoFooter';

import TodoTaskList from './TodoTaskList/TodoTaskList';
import './TodoMain.css';

function TodoMain({ tasks, onClick, onDelete, category, selectCategory, deleteAllCompleted }) {
  TodoMain.defaultProps = {
    tasks: [],
    onClick: () => {},
    onDelete: () => {},
    category: [],
    selectCategory: () => {},
    deleteAllCompleted: () => {},
  };

  TodoMain.propTypes = {
    tasks: PropTypes.string,
    onClick: PropTypes.func,
    onDelete: PropTypes.func,
    category: PropTypes.string,
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
}

export default TodoMain;
