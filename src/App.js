import React, {Component} from "react";
import About from "./Components/About";
import Home from "./Components/Home";
import Advice from "./Components/Advice";
import 'react-bootstrap/dist/react-bootstrap.min.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Routes } from "react-router";
import NavigationBar from "./Components/NavigationBar";
  
  function App() {
  return (
  <div className="App">
 
  <NavigationBar>
  <Routes>
  <Route exact path="/" component={Home}></Route>
  <Route path="/about" component={About}></Route>
  <Route exact path="/Advice" component={Advice}></Route>
</Routes>
</NavigationBar>
  </div>
  );
  }
export default App;
