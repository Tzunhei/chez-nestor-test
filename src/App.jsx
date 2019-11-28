import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import "./App.css";

import ScreenAllRooms from "./screens/ScreenAllRooms";
import ScreenSingleRoom from "./screens/ScreenSingleRoom";
import ScreenCustomer from "./screens/ScreenCustomer";
import NotFound from "./screens/NotFound";

const App = () => {
  const [rooms, setRooms] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isContentLoaded, setIsContentLoaded] = useState();

  const fetchData = async () => {
    const urlRooms = "https://technical-test-api.herokuapp.com/rooms";
    const urlCustomers = "https://technical-test-api.herokuapp.com/clients";
    try {
      setIsLoading(true);
      const roomsResponse = await axios.get(urlRooms);
      const customersResponse = await axios.get(urlCustomers);
      setRooms(roomsResponse.data);
      setCustomers(customersResponse.data);
      setIsLoading(false);
      setIsContentLoaded(true);
    } catch (error) {
      setIsContentLoaded(false);
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <ScreenAllRooms rooms={rooms} />}
          />
          <Route
            path="/rooms/:id"
            component={props => {
              const roomId = props.match.params.id;
              const singleRoom = rooms.filter(room => room.id === roomId)[0];
              let customerData;
              if (singleRoom && singleRoom.status === "occupied") {
                customerData = customers.filter(
                  customer => singleRoom.id === customer.roomId
                );
              }
              console.log(singleRoom);
              return (
                <ScreenSingleRoom
                  roomData={singleRoom}
                  customerData={customerData[0]}
                />
              );
            }}
          />
          <Route path="/customers/:id" component={ScreenCustomer} />
          <NotFound />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
