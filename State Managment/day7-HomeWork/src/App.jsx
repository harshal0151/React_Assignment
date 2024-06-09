import React, { useState } from 'react';
import restaurants from "./data";
import Navbar from './Navbar';
import './App.css';
import { FaLocationDot } from "react-icons/fa6";
import { FaCity } from "react-icons/fa";
import { CiForkAndKnife } from "react-icons/ci";

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterOption, setFilterOption] = useState('name');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilterOption(event.target.value);
  };

  const filteredRestaurants = restaurants.filter((restaurant) => {
    
    return (
      restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      restaurant.cuisine.toLowerCase().includes(searchQuery.toLowerCase()) ||
      restaurant.location.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <>
      <Navbar />
      <div className="filters">
        <input
          type="search"
          placeholder="Search for a restaurant"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <select value={filterOption} onChange={handleFilterChange}>
          <option value="name">Restaurant</option>
          <option value="cuisine">Cuisine</option>
          <option value="location">Location</option>
        </select>
      </div>
      <section>
        {filteredRestaurants.map((restaurant, index) => (
          <div className="card" key={index}>
            <div className="card_title">
              <h2>{restaurant.name}</h2>
              <span>🌟 {restaurant.rating}</span>
            </div>
            <div className="card_location">
              <p><span><FaLocationDot /></span>{restaurant.location}</p>
             
              <p><span><FaCity /></span>{restaurant.location.split(',').pop().trim()}</p>
            </div>
            <div className='famous_dish'>
              <p><span><CiForkAndKnife/></span> {restaurant.famous_dish}</p>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

export default App;
