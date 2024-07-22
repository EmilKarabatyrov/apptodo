import React from "react";
import "./TodoFooterList.css";
import PropTypes from "prop-types";

const TodoFooterList = ({ category, selectCategory }) => {
  TodoFooterList.defaultProps = {
    category: [],
    selectCategory: () => {},
  };
  TodoFooterList.propTypes = {
    category: PropTypes.array,
    selectCategory: PropTypes.func,
  };
  return (
    <ul className="filters">
      {category.map((item) => (
        <li key={item.id}>
          <button
            className={item.className}
            onClick={() => selectCategory(item.category)}
          >
            {item.name}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoFooterList;
