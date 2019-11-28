import React from "react";

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
    <>
      <div>
        <h1>{customerName}</h1>
        <ul>
          <li>{nationality}</li>
          <li>{phone}</li>
          <li>{status}</li>
          <li>{birthDate}</li>
          <li>{email}</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>{roomName}</li>
          <li>{address}</li>
          <li>{city}</li>
          <li>{zip}</li>
        </ul>
      </div>
    </>
  );
};

export default Customer;
