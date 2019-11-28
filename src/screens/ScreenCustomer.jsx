import React from "react";
import Customer from "../components/Customers/Customer";

const ScreenCustomer = ({ customerData, roomData }) => {
  return (
    <div>
      <h1>Customer page</h1>
      <Customer customerData={customerData} roomData={roomData} />
    </div>
  );
};

export default ScreenCustomer;
