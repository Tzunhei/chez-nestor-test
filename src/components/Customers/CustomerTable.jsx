import React from "react";

const CustomerTable = ({customersData}) => {
  return (
    <table>
      <thead>
        <th>Name</th>
        <th>Nationality</th>
        <th>Phone</th>
        <th>Status</th>
        <th>Birth Date</th>
        <th>Email</th>
      </thead>
      <tbody>
        {customersData.map(customer => {
          <td>{customer.name}</td>
          <td>{customer.nationality}</td>
          <td>{customer.phone}</td>
          <td>{customer.status}</td>
          <td>{customer.birthDate}</td>
          <td>{customer.email}</td>
        })}
      </tbody>
    </table>
  );
};

export default CustomerTable;
