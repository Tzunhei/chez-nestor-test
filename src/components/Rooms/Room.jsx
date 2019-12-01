import React from "react";
import { NavLink } from "react-router-dom";
import "./Room.css";

import HomeBtn from "../HomeBtn";

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
              <>
                <p>{`Currently occupied by ${customerData.name}`}</p>
                <NavLink
                  to={`/customers/${customerData.id}`}
                  className="link-btn"
                >
                  Go to customer page for details
                </NavLink>
              </>
            ) : (
              <p>Room currently available</p>
            )}
          </li>
        </ul>
        <HomeBtn />
      </div>
    )
  );
};

export default Room;
