import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { carPicture } from "../assets";

const CarCard = ({ car }) => {
  const { id, price, manufacturer, model, year } = car;

  return (
    <div className="car-card">
      <div className="car-card-image">
        <Link to={`/browse/${id}`}>
          <img src={carPicture} alt="Car" />
        </Link>
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
  const [yearFromFilter, setYearFromFilter] = useState("");
  const [yearToFilter, setYearToFilter] = useState("");
  const [priceFromFilter, setPriceFromFilter] = useState("");
  const [priceToFilter, setPriceToFilter] = useState("");
  const [makeFilter, setMakeFilter] = useState("");
  const [modelFilter, setModelFilter] = useState("");

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

  const applyFilters = () => {
    const url = `http://localhost:8080/adverts?minYear=${yearFromFilter}&maxYear=${yearToFilter}&minPrice=${priceFromFilter}&maxPrice=${priceToFilter}&manufacturer=${makeFilter}&model=${modelFilter}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCars(data);
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="container">
      <div id="filter">
        <h2>Filter menu</h2>
        <h3>Filter by year</h3>
        <div className="filter-input-group">
          <p>From</p>
          <input
            type="number"
            value={yearFromFilter}
            onChange={(e) => setYearFromFilter(e.target.value)}
          />
          <p>To</p>
          <input
            type="number"
            value={yearToFilter}
            onChange={(e) => setYearToFilter(e.target.value)}
          />
        </div>
        <h3>Filter by price</h3>
        <div className="filter-input-group">
          <p>From</p>
          <input
            type="number"
            value={priceFromFilter}
            onChange={(e) => setPriceFromFilter(e.target.value)}
          />
          <p>To</p>
          <input
            type="number"
            value={priceToFilter}
            onChange={(e) => setPriceToFilter(e.target.value)}
          />
        </div>
        <h3>Filter by make</h3>
        <div className="filter-input-group">
          <select
            value={makeFilter}
            onChange={(e) => setMakeFilter(e.target.value)}
          >
            <option>--</option>
            <option>Mercedes</option>
            <option>Audi</option>
            <option>BMW</option>
          </select>
        </div>
        <h3>Filter by model</h3>
        <div className="filter-input-group">
          <input
            type="text"
            value={modelFilter}
            onChange={(e) => setModelFilter(e.target.value)}
          />
        </div>
        <button className="filter-button" onClick={applyFilters}>
          Apply filters
        </button>
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
