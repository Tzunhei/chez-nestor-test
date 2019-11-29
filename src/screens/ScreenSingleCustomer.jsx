import React from "react";
import Customer from "../components/Customers/Customer";

const ScreenSingleCustomer = ({ customerData, roomData }) => {
  return (
    customerData && (
      <div>
        <h1>Customer page</h1>
        <Customer customerData={customerData} roomData={roomData} />
      </div>
    )
  );
};

export default ScreenSingleCustomer;
