import React, { useState } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Order from "./components/Order.jsx";
import Home from "./components/Home.jsx";
import Success from "./components/Success.jsx";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Order />
        </Route>
        <Route>
          <Home />
        </Route>
        <Route>
          <Success />
        </Route>
      </Switch>
    </>
  );
}

export default App;
