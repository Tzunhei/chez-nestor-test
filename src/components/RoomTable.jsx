import React from "react";
import RoomList from "./RoomList";

const RoomTable = ({ rooms }) => {
  return (
    <table>
      <tr>
        <th>Name</th>
        <th>Address</th>
        <th>Zip Code</th>
        <th>City</th>
        <th>Status</th>
      </tr>
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
    </table>
  );
};

export default RoomTable;
