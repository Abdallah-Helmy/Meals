import React from 'react';
import './style.css';

function Meal({ id, title, category, price, img, desc }) {
  return (
    <div>
      <div className="meal">
        <img src={img} alt={title} />
        <div className="info">
          <div className="price-info">
            <p>{title}</p>
            <span>${price}</span>
          </div>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
}

export default Meal;
