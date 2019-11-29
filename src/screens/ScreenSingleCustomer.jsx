import React from "react";
import Customer from "../components/Customers/Customer";

const ScreenSingleCustomer = ({ customerData, roomData }) => {
  return (
    customerData && (
      <div>
        <Customer customerData={customerData} roomData={roomData} />
      </div>
    )
  );
};

export default ScreenSingleCustomer;
