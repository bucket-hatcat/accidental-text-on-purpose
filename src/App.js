import React, { useState } from 'react';
import {Route, Link, Switch, Redirect} from 'react-router-dom'
import './App.css';
import './Components/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  <br />
      </header>
    </div>
  );
}

export default App;
