import React from "react";
import { NavLink } from "react-router-dom";

const RoomList = ({ id, name, address, zip, city, status }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{address}</td>
      <td>{zip}</td>
      <td>{city}</td>
      <td>{status}</td>
      <NavLink to={`/rooms/${id}`}>Room details</NavLink>
      {/* <NavLink>Client details</NavLink> */}
    </tr>
  );
};

export default RoomList;
