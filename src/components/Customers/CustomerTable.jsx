import React from "react";
import { NavLink } from "react-router-dom";
import "./CustomerTable.css";

const CustomerTable = ({ customersData }) => {
  const getCustomerStatusCellClassName = status => {
    if (status === "booked") {
      return "status-booked";
    }
    if (status === "checked-in") {
      return "status-checked-in";
    }
    return "status-checked-out";
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Nationality</th>
          <th>Phone</th>
          <th>Birth Date</th>
          <th>Email</th>
          <th>Status</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {customersData.map(customer => {
          return (
            <tr key={customer.id}>
              <td>{customer.name}</td>
              <td>{customer.birthDate}</td>
              <td>{customer.nationality}</td>
              <td>{customer.email}</td>
              <td>{customer.phone}</td>
              <td className={getCustomerStatusCellClassName(customer.status)}>
                {customer.status}
              </td>
              <td className="table-details-btn">
                <NavLink to={`/customers/${customer.id}`}>
                  Client details
                </NavLink>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default CustomerTable;
