import React from "react";

const Room = ({ roomData }) => {
  const { name, address, city, zip, status } = roomData;
  return (
    roomData && (
      <>
        <h1>{name}</h1>
        <ul>
          <li>{address}</li>
          <li>{city}</li>
          <li>{zip}</li>
          <li>{status}</li>
        </ul>
      </>
    )
  );
};

export default Room;
