import React from "react";
import RoomList from "./RoomList";

const RoomTable = ({ rooms }) => {
  console.log(rooms);
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Address</th>
          <th>Zip Code</th>
          <th>City</th>
          <th>Status</th>
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
  );
};

export default RoomTable;
