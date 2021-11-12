import React from "react";
import Home from "./Components/Home";
import "react-bootstrap/dist/react-bootstrap.min.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Components/Header";
import Advice from "./Components/Advice";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/Advice">
          <Advice />
        </Route>
      </Switch>
    </div>
  );
}
export default App;
