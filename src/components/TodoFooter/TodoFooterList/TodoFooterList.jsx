import React from "react";
import "./TodoFooterList.css";
const TodoFooterList = ({ className }) => {
  return (
    <ul className={className}>
      <li>
        <button className="selected">All</button>
      </li>
      <li>
        <button>Active</button>
      </li>
      <li>
        <button>Completed</button>
      </li>
    </ul>
  );
};

export default TodoFooterList;
