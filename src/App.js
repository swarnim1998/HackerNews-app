import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./component/Home";
import UserDetails from "./component/UserDetails";
import Navigation from "./component/Navigation";
import SearchAndFilter from "./component/SearchAndFilter";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/user/:id" component={UserDetails} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
