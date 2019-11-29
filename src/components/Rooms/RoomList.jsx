import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import "./RoomList.css";

const RoomList = ({ id, name, address, zip, city, status }) => {
  return (
    <tr className="table-row">
      <td>{name}</td>
      <td>{address}</td>
      <td>{zip}</td>
      <td>{city}</td>
      <td
        className={status === "occupied" ? "occupied-cell" : "available-cell"}
      >
        {status}
      </td>
      <td className="table-details-btn">
        <NavLink to={`/rooms/${id}`}>Room details</NavLink>
      </td>
    </tr>
  );
};

RoomList.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  zip: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired
};

export default RoomList;
