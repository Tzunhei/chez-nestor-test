import React from "react";

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
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default CustomerTable;
