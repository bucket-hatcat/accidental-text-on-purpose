import About from "./About";
import Home from "./Home";
import { BrowserRouter } from "react-router-dom";
import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


function Header() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
    <Container>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#About">About</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
    </div>
    )
  
};
  export default Header;