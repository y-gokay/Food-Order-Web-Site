import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import OrderForm from "./components/scripts/OrderForm.jsx";
import Home from "./components/scripts/Home.jsx";
import Success from "./components/scripts/Success.jsx";

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
