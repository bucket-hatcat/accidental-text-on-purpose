import React, {Component} from "react";
import About from "./Components/About";
import Home from "./Components/Home";
import Advice from "./Components/Advice";
import 'react-bootstrap/dist/react-bootstrap.min.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Routes } from "react-router";
import Header from "./Components/Header";
  
  function App() {
  return (
  <div className="App">
<Header />
<Advice />
  </div>
  );
  }
export default App;
