import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container">
      <NavLink to="/">Rooms</NavLink>
      <NavLink to="/customers">Customers</NavLink>
    </div>
  );
};

export default Header;
