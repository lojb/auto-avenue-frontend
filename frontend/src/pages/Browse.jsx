import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { wheel, tire } from "../assets";
import { manufacturers } from "../constants";

const CarCard = ({ car }) => {
  const { id, price, manufacturer, model, year, imageUrl, transmission } = car;

  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div
      className="rounded-lg overflow-hidden shadow-md"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex flex-col">
        <div className="flex items-center p-2">
          <div className="mt-2 ml-2 mr-2 text-[22px] leading-[26px] font-bold capitalize">
            {manufacturer} {model}
          </div>
        </div>
        <p className="flex mt-4 ml-4 text-[26px] leading-[38px] font-extrabold">
          <span className="self-start text-[14px] leading-[17px] font-semibold">
            $
          </span>
          {price}
        </p>

        <div className="flex justify-center m-5 ">
          <img
            src={imageUrl}
            alt="Car"
            className="relative w-full h-40 my-3 object-contain rounded-md"
          />
        </div>
        {!hovered && (
          <div className="flex justify-between p-2">
            <div className="flex flex-col justify-center items-center gap-2 mb-1">
              <img src={wheel} alt="Transmission" className="w-6 h-6 mr-2" />
              <p className="text-[14px] leading-[17px]">{transmission}</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-2 mb-1">
              <img src={tire} alt="Year" className="w-6 h-6 mr-2" />
              <p className="text-[14px] leading-[17px]">{year}</p>
            </div>
          </div>
        )}
        {hovered && (
          <div className="p-2">
            <Link
              to={`/browse/${id}`}
              className="block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center"
            >
              View more
            </Link>
          </div>
        )}
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
    <div className="container mt-[7%]">
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
            <option value={""} placeholder={"Select a manufacturer"}></option>
            {manufacturers.map((make) => (
              <option>{make}</option>
            ))}
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
      <div className="flex flex-row gap-4">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
};

export default Browse;
