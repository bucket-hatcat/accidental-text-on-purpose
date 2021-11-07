import React, { useState } from "react";
import {Link, Switch, Redirect } from "react-router-dom";
import "./App.css";
import "./Components/Home";
import { Route, Switch } from "react-router";
import ReactBootstrap, { Navbar, Container, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home";
import { LinkContainer } from "react-router-bootstrap";
import {Switch} from 'react-router-native'

function App() {
  return (
    <div>
      <nav>
        <Link to="/">
          <img
            src="https://en.bitcoin.it/w/images/en/2/29/BC_Logo_.png"
            alt=""
          />
          <h1>Bitcoin prices</h1>
        </Link>
        <Link to="/currencies">Currency List</Link>
      </nav>
      <main>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/currencies" component={Currencies} />
          <Route
            path="/price/:currency"
            render={(routerProps) => (
              <Price handleClick={handleClick} {...routerProps} price={price} />
            )}
          />
          )
        </Switch>
      </main>
    </div>
  );
}
export default App;
