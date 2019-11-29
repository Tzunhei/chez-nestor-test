import React from "react";
import RoomTable from "../components/Rooms/RoomTable";

const ScreenAllRooms = ({ rooms }) => {
  return (
    <div>
      <RoomTable rooms={rooms} />
    </div>
  );
};

export default ScreenAllRooms;
