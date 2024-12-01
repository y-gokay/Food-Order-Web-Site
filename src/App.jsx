import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import NavMenu from "./components/scripts/NavMenu.jsx";
import OrderForm from "./components/scripts/OrderForm.jsx";
import Home from "./components/scripts/Home.jsx";
import Success from "./components/scripts/Success.jsx";
import navMenu from "./components/scripts/NavMenu.jsx";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/order">
        <OrderForm />
      </Route>
      <Route path="/success">
        <Success />
      </Route>
    </Switch>
  );
}

export default App;
