import React, { useState, useEffect, submitForm } from "react";
import { useNavigate, Router } from "react-router";
import "./App.css";
import {Nav, Navbar, Container } from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap'


function App() {
  const [advice, setAdvice] = useState("");
  // https://api.adviceslip.com/advice

  useEffect(() => {
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then((advice) => {
        setAdvice(advice.slip.advice);
        // console.log("LOAD ADVICE", advice);
      });
  }, []);

  let fetchNewAdvice = () => {
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then((advice) => {
        setAdvice(advice.slip.advice);
        // console.log("BUTTON ADVICE", advice)
      });
  };

  let navigate = useNavigate();
  let [error, setError] = React.useState(null);

  const header = () => {
    return (

function handleSubmit(event) {
    event.preventDefault();
    let result = submitForm(event.target);
    if (result.error) {
      setError(result.error);
    } else {
      navigate("success");
    }
  })

  return (
    <div className="App">
    
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <LinkContainer>
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </LinkContainer>
</Navbar>



      
      <div className="advice">
        <h2>{advice}</h2>
      </div>
      <br />
      <button className="btn" onClick={fetchNewAdvice}>
        Generate New advice
      </button>
    </div>
  );
}}

export default App;
