import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-title">
        <h1>Chez Nestor</h1>
      </div>
      <nav className="header-nav">
        <NavLink
          to="/rooms"
          className="header-link"
          activeClassName="header-link-active"
        >
          Rooms
        </NavLink>
        <NavLink
          to="/customers"
          className="header-link"
          activeClassName="header-link-active"
        >
          Customers
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
