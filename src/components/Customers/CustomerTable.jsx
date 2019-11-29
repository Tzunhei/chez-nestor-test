import React from "react";
import { NavLink } from "react-router-dom";

const CustomerTable = ({ customersData }) => {
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
              <td>{customer.status}</td>
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
