import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import "./App.css";

import Home from "./screens/Home";
import Rooms from "./screens/Rooms";
import Customers from "./screens/Customers";
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
          <Route exact path="/" component={Home} />
          <Route path="/rooms" component={Rooms} />
          <Route path="/customers" component={Customers} />
          <NotFound />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
