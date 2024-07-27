import React from 'react';
import './TodoFooterList.css';
import PropTypes from 'prop-types';

function TodoFooterList({ category, selectCategory }) {
  TodoFooterList.defaultProps = {
    category: [],
    selectCategory: () => {},
  };
  TodoFooterList.propTypes = {
    category: PropTypes.string,
    selectCategory: PropTypes.func,
  };
  return (
    <ul className="filters">
      {category.map((item) => (
        <li key={item.id}>
          <button type="button" className={item.className} onClick={() => selectCategory(item.category)}>
            {item.name}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoFooterList;
