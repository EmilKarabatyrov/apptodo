import React from 'react';
import './TodoTaskList.css';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import PropTypes from 'prop-types';
const TodoTaskList = ({ tasks, onClick, onDelete }) => {
  TodoTaskList.defaultProps = {
    tasks: [],
    onClick: () => {},
    onDelete: () => {},
  };
  TodoTaskList.propTypes = {
    tasks: PropTypes.array,
    onClick: PropTypes.func,
    onDelete: PropTypes.func,
  };
  return (
    <ul className="todo-list">
      {tasks.map((item, index) => (
        <li key={index + 1} className={item.completed ? 'completed' : ''}>
          <div className="view">
            <input className="toggle" type="checkbox" />
            <label>
              <span onClick={() => onClick(item.id)} className="description">
                {item.description}
              </span>
              <span className="created">
                created{' '}
                {formatDistanceToNow(item.createTime, {
                  addSuffix: true,
                  includeSeconds: true,
                })}
              </span>
            </label>
            <button className="icon icon-edit"></button>
            <button onClick={() => onDelete(item.id)} className="icon icon-destroy"></button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoTaskList;
