import React from "react";
import RoomTable from "../components/Rooms/RoomTable";

const ScreenAllRooms = ({ rooms }) => {
  return (
    <div>
      <h1>Rooms page</h1>
      <RoomTable rooms={rooms} />
    </div>
  );
};

export default ScreenAllRooms;
