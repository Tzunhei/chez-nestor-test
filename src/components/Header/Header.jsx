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
        <NavLink to="/" className="header-link">
          Rooms
        </NavLink>
        <NavLink to="/customers" className="header-link">
          Customers
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
