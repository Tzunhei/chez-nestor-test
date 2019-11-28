import React from "react";
import RoomTable from "../components/RoomTable";

const ScreenRooms = ({ rooms }) => {
  return (
    <div>
      <h1>Rooms page</h1>
      <RoomTable rooms={rooms} />
    </div>
  );
};

export default ScreenRooms;
