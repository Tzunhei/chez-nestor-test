import React from "react";

const RoomList = ({ name, address, zip, city, status }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{address}</td>
      <td>{zip}</td>
      <td>{city}</td>
      <td>{status}</td>
    </tr>
  );
};

export default RoomList;
