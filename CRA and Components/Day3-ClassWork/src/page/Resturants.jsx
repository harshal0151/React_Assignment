import React, { useState } from 'react';
// import { FaLocationDot, FaCity } from 'react-icons/fa';
// import { CiForkAndKnife } from 'react-icons/ci';
import filteredRestaurants from "../assets/data";

function Restaurants() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterOption, setFilterOption] = useState('name');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    // Add your search filtering logic here
  };

  const handleFilterChange = (event) => {
    setFilterOption(event.target.value);
    // Add your filtering logic based on the selected option here
  };

  return (
    <>
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
              <p><span></span>{restaurant.location}</p>
              <p><span></span>{restaurant.location.split(',').pop().trim()}</p>
            </div>
            <div className='famous_dish'>
              <p><span></span> {restaurant.famous_dish}</p>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

export default Restaurants;
