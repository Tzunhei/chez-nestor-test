import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/rooms">Rooms</NavLink>
      <NavLink to="/customers">Customers</NavLink>
    </>
  );
};

export default NavBar;
