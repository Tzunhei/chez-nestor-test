import React from "react";
import Room from "../components/Rooms/Room";

const ScreenSingleRoom = ({ roomData }) => {
  return (
    <div>
      <Room roomData={roomData} />
    </div>
  );
};

export default ScreenSingleRoom;
