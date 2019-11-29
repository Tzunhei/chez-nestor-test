import React from "react";

const CustomerTable = ({ customersData }) => {
  return (
    <table>
      <thead>
        <tr>
          <td>Name</td>
          <td>Nationality</td>
          <td>Phone</td>
          <td>Birth Date</td>
          <td>Email</td>
          <td>Status</td>
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
