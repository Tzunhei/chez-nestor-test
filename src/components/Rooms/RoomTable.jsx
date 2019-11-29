import React from "react";
import RoomList from "./RoomList";
import "./RoomTable.css";

const RoomTable = ({ rooms }) => {
  return (
    rooms && (
      <table className="table-container">
        <thead>
          <tr className="table-row">
            <th>Name</th>
            <th>Address</th>
            <th>Zip Code</th>
            <th>City</th>
            <th>Status</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {rooms.map(room => {
            return (
              <RoomList
                key={room.id}
                id={room.id}
                name={room.name}
                address={room.address}
                zip={room.zip}
                city={room.city}
                status={room.status}
              />
            );
          })}
        </tbody>
      </table>
    )
  );
};

export default RoomTable;
