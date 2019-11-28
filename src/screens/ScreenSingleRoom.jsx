import React from "react";
import Room from "../components/Rooms/Room";

const ScreenSingleRoom = ({ roomData, customerData }) => {
  return (
    <div>
      <Room roomData={roomData} customerData={customerData} />
    </div>
  );
};

export default ScreenSingleRoom;
