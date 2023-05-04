import React from "react";

const Browse = () => {
  return (
    <div className="container">
      <div id="filter">
        <h2>Filter menu</h2>
        <h3>Filter by year</h3>
        <div className="filter-input-group">
          <p>From</p>
          <input type="number" />
          <p>To</p>
          <input type="number" />
        </div>
        <h3>Filter by make</h3>
        <div className="filter-input-group">
          <select>
            <option>--</option>
            <option>make1</option>
            <option>make2</option>
            <option>make3</option>
          </select>
        </div>
        <h3>Filter by model</h3>
        <div className="filter-input-group">
          <input type="text" />
        </div>
        <button className="filter-button">Apply filters</button>
      </div>
      <div>
        <ul className="car-list">
          <li>car1</li>
          <li>car2</li>
          <li>car3</li>
          <li>car4</li>
          <li>car5</li>
        </ul>
      </div>
    </div>
  );
};

export default Browse;
