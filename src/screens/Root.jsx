import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Home";
import Rooms from "./Rooms";
import Customers from "./Customers";
import NotFound from "./NotFound";

const Root = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/rooms" component={Rooms} />
        <Route path="/customers" component={Customers} />
        <NotFound />
      </Switch>
    </Router>
  );
};

export default Root;
