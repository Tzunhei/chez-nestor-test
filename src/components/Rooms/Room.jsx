import React from "react";
import { NavLink } from "react-router-dom";
import "./Room.css";

const Room = ({ roomData, customerData }) => {
  const { name, address, city, zip, status } = roomData;
  return (
    roomData && (
      <div className="room-container">
        <h1>{name}</h1>
        <ul>
          <li>{`Address: ${address}`}</li>
          <li>{`City: ${city}`}</li>
          <li>{`Zip: ${zip}`}</li>
          <li>
            {status === "occupied" ? (
              <NavLink
                to={`/customers/${customerData.id}`}
                className="customer-name"
              >
                {`Currently occupied by ${customerData.name}`}
              </NavLink>
            ) : (
              <p>Room currently available</p>
            )}
          </li>
        </ul>
      </div>
    )
  );
};

export default Room;
