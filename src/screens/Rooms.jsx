import React from "react";
import RoomTable from "../components/RoomTable";

const Rooms = ({ rooms }) => {
  return (
    <div>
      <h1>Page chambres</h1>
      <RoomTable />
    </div>
  );
};

export default Rooms;
