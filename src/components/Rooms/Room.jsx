import React from "react";
import { NavLink } from "react-router-dom";

const Room = ({ roomData, customerData }) => {
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
        {status === "occupied" ? (
          <NavLink to={`/customers/${customerData.id}`}>
            {`Currently occupied by ${customerData.name}`}
          </NavLink>
        ) : (
          <p>Room currently available</p>
        )}
      </>
    )
  );
};

export default Room;
