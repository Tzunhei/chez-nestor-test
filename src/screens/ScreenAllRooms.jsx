import React from "react";
import PropTypes from "prop-types";
import RoomTable from "../components/Rooms/RoomTable";

const ScreenAllRooms = ({ rooms }) => {
  return (
    <div>
      <RoomTable rooms={rooms} />
    </div>
  );
};

ScreenAllRooms.propTypes = {
  rooms: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    zip: PropTypes.number.isRequired,
    city: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired
  }).isRequired
};

export default ScreenAllRooms;
