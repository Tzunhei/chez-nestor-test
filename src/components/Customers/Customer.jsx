import React from "react";
import PropTypes from "prop-types";
import "./Customer.css";

const Customer = ({ customerData, roomData }) => {
  const {
    name: customerName,
    nationality,
    phone,
    status,
    birthDate,
    email
  } = customerData;
  const { name: roomName, address, city, zip } = roomData;
  return (
    <div className="customer-container">
      <h1>{customerName}</h1>
      <div className="customer-infos-container">
        <div className="customer-profile-container">
          <h2>User Profile:</h2>
          <ul>
            <li>{`Nationality: ${nationality}`}</li>
            <li>{`Phone: ${phone}`}</li>
            <li>{`Status: ${status}`}</li>
            <li>{`Birth Date: ${birthDate}`}</li>
            <li>{`Email: ${email}`}</li>
          </ul>
        </div>
        {roomData.status === "occupied" ? (
          <div className="customer-room-container">
            <h2>Room Details:</h2>
            <ul>
              <li>{`Name: ${roomName}`}</li>
              <li>{`Address: ${address}`}</li>
              <li>{`City: ${city}`}</li>
              <li>{`Zip: ${zip}`}</li>
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  );
};

Customer.propTypes = {
  customerData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    birthDate: PropTypes.string.isRequired,
    nationality: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired
  }).isRequired,
  roomData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    zip: PropTypes.number.isRequired,
    city: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired
  }).isRequired
};

export default Customer;
