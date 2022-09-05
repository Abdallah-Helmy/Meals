import React from 'react';

function Categories({ filterItems, categories }) {
  return (
    <div>
      <div className="btns">
        {categories.map((category, index) => {
          return (
            <button onClick={() => filterItems(category)} key={index} type="button">
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Categories;
