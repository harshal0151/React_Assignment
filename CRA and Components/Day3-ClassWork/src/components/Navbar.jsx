import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav>
        <div className="logo">
          <img src="https://flowbite.com/docs/images/logo.svg" alt="Logo" />
          <h1>GeekFoods</h1>
        </div>

        <div className="items">
          <NavLink
            exact
            to="/"
            className={({ isActive }) => (isActive ? "active-link" : undefined)}
          >
            Home
          </NavLink>
          <NavLink
            to="/quote"
            className={({ isActive }) => (isActive ? "active-link" : undefined)}
          >
            Quote 
          </NavLink>
          <NavLink
            to="/resturants"
            className={({ isActive }) => (isActive ? "active-link" : undefined)}
          >
            Restaurants
          </NavLink>
          <NavLink
            to="/foods"
            className={({ isActive }) => (isActive ? "active-link" : undefined)}
          >
            Foods
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active-link" : undefined)}
          >
            Contact
          </NavLink>
        </div>

        <button>Get started</button>
      </nav>
    </>
  );
}

export default Navbar;
