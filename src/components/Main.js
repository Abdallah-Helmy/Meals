import React, { useState } from 'react';
import './style.css';
import menu from './data';
import Meal from './Meal';
import Categories from './Categories';

const myCategories = ['all', ...new Set(menu.map(meal => meal.category))];

const Main = () => {
  const [mealmenu, setmealmenu] = useState(menu);
  const [categories, setcategories] = useState(myCategories);

  const filterItems = category => {
    let newItems = menu.filter(meal => {
      if (meal.category === category || category === 'all') {
        return meal;
      }
    });
    setmealmenu(newItems);
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Our Menu</h1>
      </div>
      <Categories filterItems={filterItems} categories={categories} />
      <div className="meals">
        {mealmenu.map(meal => {
          return <Meal key={meal.id} {...meal} />;
        })}
      </div>
    </div>
  );
};

export default Main;
