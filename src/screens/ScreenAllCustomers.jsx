import React from "react";
import CustomerTable from "../components/Customers/CustomerTable";

const ScreenAllCustomers = ({ customersData }) => {
  return (
    customersData && (
      <div>
        <CustomerTable customersData={customersData} />
      </div>
    )
  );
};

export default ScreenAllCustomers;
