import React, { useState, useEffect, submitForm } from "react";
import { useNavigate, } from "react-router";
import "./App.css";
import Home from "./Home";
import About from "./About";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Container, Nav, NavDropdown } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";

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

  async function handleSubmit(event) {
    event.preventDefault();
    let result = await submitForm(event.target);
    if (result.error) {
      setError(result.error);
    } else {
      navigate("success");
    }
  }

  return (
    <div className="App">
      <Navbar collapseOnSelect expand="md">
  
<Navbar.Toggle aria-controls="responsive-navbar-nav" />
<Navbar.Collapse id="responsive-navbar-nav">
   <nav>
        <Link to='/homepage'>iStocks</Link>
        <Link to='/Stocks'>Stocks</Link>
        <Link to='/About'>About</Link>
</nav>

  <Routes>
        <Route path='/homepage' exact component={Home}/>
        <Route path='/About' exact component={About}/>
</Routes>

</Navbar.Collapse>
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
}

export default App;
