import React, { useState, useEffect, submitForm } from "react";
import Navbar from "./Components/Header.js";
import "./App.css";
import About from "./Components/About";
import { render } from "@testing-library/react";
// import {LinkContainer} from 'react-router-bootstrap'
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
  
  return (
    <div className="App">
<Navbar />
</div>


    //   <div className="advice">
    //     <h2>{advice}</h2>
    //   </div>
    //   <br />
    //   <button className="btn" onClick={fetchNewAdvice}>
    //     Generate New advice
    //   </button>
    // </div>
  );
}
export default App;