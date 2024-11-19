import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const CategoryTab = () => {
  const [category, setCategory] = useState([])
  useEffect(()=>{
    fetch("/category.json")
    .then(res=> res.json())
    .then(data=> setCategory(data))
  }, [setCategory])
  return (
    <div>
      <div role="tablist" className="tabs tabs-lifted flex overflow-x-auto">
        {category.map(cat => (
          <NavLink
            key={cat.id}
            to={`/adventure/${cat.category_name}`}
            role="tab"
            className={({ isActive }) => `tab font-bold text-base px-4 py-2 ${isActive ? 'tab-active' : ''}`}
          >
            {cat.category_name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default CategoryTab;