import React from "react";
import RoomTable from "../components/RoomTable";

const Rooms = ({ rooms }) => {
  return (
    <div>
      <h1>Rooms page</h1>
      <RoomTable rooms={rooms} />
    </div>
  );
};

export default Rooms;
