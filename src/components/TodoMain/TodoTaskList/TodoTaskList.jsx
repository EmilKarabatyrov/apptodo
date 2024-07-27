import React from 'react';
import './TodoTaskList.css';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import PropTypes from 'prop-types';

function TodoTaskList({ tasks, onClick, onDelete }) {
  TodoTaskList.defaultProps = {
    tasks: [],
    onClick: () => {},
    onDelete: () => {},
  };
  TodoTaskList.propTypes = {
    tasks: PropTypes.string,
    onClick: PropTypes.func,
    onDelete: PropTypes.func,
  };
  return (
    <ul className="todo-list">
      {tasks.map((item) => (
        <li key={item.id} className={item.completed ? 'completed' : ''}>
          <div className="view">
            <input className="toggle" type="checkbox" />
            <label htmlFor="s">
              {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
              <span id="#s" onKeyDown={() => onClick(item.id)} onClick={() => onClick(item.id)} className="description">
                {item.description}
              </span>
              <span className="created">
                created
                {' '}
                {formatDistanceToNow(item.createTime, {
                  addSuffix: true,
                  includeSeconds: true,
                })}
              </span>
            </label>
            <button type="button" className="icon icon-edit" aria-label="Edit button" />
            <button type="button" onClick={() => onDelete(item.id)} className="icon icon-destroy" aria-label="Delete button" />
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TodoTaskList;
