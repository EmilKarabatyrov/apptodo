import React from "react";
import formatDistance from "date-fns/formatDistance";
const TodoTaskActive = () => {
  const currentDate = new Date();
  const createDate = new Date(); // тут дата создания
  // console.log(formatDistance(createDate, currentDate));
  return (
    <li>
      <div className="view">
        <input className="toggle" type="checkbox" />
        <label>
          <span className="description">Active task</span>
          <span className="created">{new Date().toLocaleTimeString()}</span>
        </label>
        <button className="icon icon-edit"></button>
        <button className="icon icon-destroy"></button>
      </div>
    </li>
  );
};

export default TodoTaskActive;
