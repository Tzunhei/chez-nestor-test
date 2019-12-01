import React from "react";
import { NavLink } from "react-router-dom";
import "./HomeBtn.css";

const HomeBtn = () => {
  return (
    <div className="link-btn home-btn">
      <NavLink to="/">{"< - Back to Home"}</NavLink>
    </div>
  );
};

export default HomeBtn;
