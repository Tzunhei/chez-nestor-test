import React from "react";
import PropTypes from "prop-types";
import Room from "../components/Rooms/Room";

const ScreenSingleRoom = ({ roomData, customerData }) => {
  return (
    <div>
      <Room roomData={roomData} customerData={customerData} />
    </div>
  );
};

ScreenSingleRoom.propTypes = {
  roomData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    zip: PropTypes.number.isRequired,
    city: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired
  }).isRequired,
  customerData: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string
  }).isRequired
};

export default ScreenSingleRoom;
