import React from "react";
import { NavLink } from "react-router-dom";

const RoomList = ({ id, name, address, zip, city, status }) => {
  return (
    <tr className="table-row">
      <td>{name}</td>
      <td>{address}</td>
      <td>{zip}</td>
      <td>{city}</td>
      <td>{status}</td>
      <td>
        <NavLink to={`/rooms/${id}`}>Room details</NavLink>
      </td>
    </tr>
  );
};

export default RoomList;