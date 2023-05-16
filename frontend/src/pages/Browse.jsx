import React, { useState, useEffect } from "react";
import { carPicture } from "../assets";

const CarCard = ({ car }) => {
  const { price, manufacturer, model, year } = car;
  console.log(manufacturer);
  return (
    <div className="car-card">
      <div className="car-card-image">
        <img src={carPicture} alt="Car" />
      </div>
      <div className="car-card-details">
        <div className="car-card-details">
          <div className="car-card-price">{price}$</div>
          <div className="car-card-make">{manufacturer}</div>
          <div className="car-card-model">{model}</div>
          <div className="car-card-year">{year}</div>
        </div>
      </div>
    </div>
  );
};

const Browse = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/adverts")
      .then((response) => response.json())
      .then((data) => {
        setCars(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

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
        <h3>Filter by price</h3>
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
            <option>Mercedes</option>
            <option>Audi</option>
            <option>BMW</option>
          </select>
        </div>
        <h3>Filter by model</h3>
        <div className="filter-input-group">
          <input type="text" />
        </div>
        <button className="filter-button">Apply filters</button>
      </div>
      <div>
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
};

export default Browse;
