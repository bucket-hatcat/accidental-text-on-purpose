import React, { useState } from 'react';
import {Route, Link, Switch, Redirect} from 'react-router-dom'
import './App.css';
import './Components/Home';
import ReactBootstrap, {Navbar, Container, Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
import { LinkContainer } from 'react-router-bootstrap';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar fixed="top" bg="dark" variant="dark">
    <Container>
    <Navbar.Brand>Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <LinkContainer to="/Home"> <Nav.Link>Home</Nav.Link></LinkContainer>
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
