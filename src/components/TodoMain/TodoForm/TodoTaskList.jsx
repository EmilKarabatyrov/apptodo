import React from "react";
import "./TodoForm.css";
const TodoTaskList = ({ tasks, onClick, onDelete }) => {
  console.log();
  return (
    <ul className="todo-list">
      {tasks.map((item) => (
        <li key={item.id} className={item.completed ? "completed" : ""}>
          <div className="view">
            <input className="toggle" type="checkbox" />
            <label>
              <span onClick={() => onClick(item.id)} className="description">
                {item.description}
              </span>
              <span className="created">created 17 seconds ago</span>
            </label>
            <button className="icon icon-edit"></button>
            <button
              onClick={() => onDelete(item.id)}
              className="icon icon-destroy"
            ></button>
          </div>
          {/*<input type="text" className="edit" value="Editing task" />*/}
        </li>
      ))}
    </ul>
  );
};

export default TodoTaskList;
