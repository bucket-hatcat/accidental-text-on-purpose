import React from "react";
import About from "./Components/About";
import Home from "./Components/Home";
import RandomWords from "./Components/RandomWords";
import NoMatch from "./Components/NoMatch";
import Header from './Components/NavigationBar';
import Advice from "./Components/Advice";
import NavigationBar from './components/NavigationBar';
import 'react-bootstrap/dist/react-bootstrap.min.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';
  
  function App() {
  return (
  <div className="App">
  <Router>
  <NavigationBar></NavigationBar>
  <Route exact path="/" component={Home}></Route>
  <Route path="/about" component={About}></Route>
  <Route exact path="/contact" component={Contact}></Route>
  </Router>
  </div>
  );
  }
  export default App;
