import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import "./App.css";

import Header from "./components/Header/Header";
import ScreenAllRooms from "./screens/ScreenAllRooms";
import ScreenSingleRoom from "./screens/ScreenSingleRoom";
import ScreenSingleCustomer from "./screens/ScreenSingleCustomer";
import NotFound from "./screens/NotFound";
import Loading from "./screens/Loading";
import ScreenAllCustomers from "./screens/ScreenAllCustomers";

const App = () => {
  const [rooms, setRooms] = useState(null);
  const [customers, setCustomers] = useState(null);
  const [isLoading, setIsLoading] = useState();
  const [isContentLoaded, setIsContentLoaded] = useState();

  const renderScreenSingleRoom = props => {
    const { roomId } = props.match.params;
    const singleRoom = rooms.filter(room => room.id === roomId)[0];
    let customerData;
    if (singleRoom && singleRoom.status === "occupied") {
      customerData = customers.filter(
        customer => singleRoom.id === customer.roomId
      );
    }
    return (
      <ScreenSingleRoom
        roomData={singleRoom}
        customerData={customerData ? customerData[0] : null}
      />
    );
  };

  const renderScreenSingleCustomer = props => {
    const { customerId } = props.match.params;
    const customer = customers.filter(item => item.id === customerId)[0];
    const roomData = rooms.filter(room => room.id === customer.roomId)[0];
    return <ScreenSingleCustomer customerData={customer} roomData={roomData} />;
  };

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
        <Header />
        {isLoading ? (
          <Loading />
        ) : (
          <Switch>
            <Route
              exact
              path={["/", "/rooms"]}
              render={() => <ScreenAllRooms rooms={rooms} />}
            />
            <Route
              path="/rooms/:roomId"
              render={props => {
                return renderScreenSingleRoom(props, rooms, customers);
              }}
            />
            <Route
              exact
              path="/customers"
              render={() => <ScreenAllCustomers customersData={customers} />}
            />
            <Route
              path="/customers/:customerId"
              render={props => {
                return renderScreenSingleCustomer(props, customers, rooms);
              }}
            />
            <NotFound />
          </Switch>
        )}
      </Router>
    </div>
  );
};

export default App;
