import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";


function Header() {
  return (
    <div>
    
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link
               href="/">Home 
            </Nav.Link>
            <Nav.Link
               href="/About">About
            </Nav.Link>
            <Nav.Link
               href="/Advice">Advice
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
export default Header;
