import React, { useState, useEffect, submitForm } from "react";


function Advice() {
    const [Advice, setAdvice] = useState("");
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
  
<div>
        <div className="advice">
          <h2>{Advice}</h2>
        </div>
        <br />
        <button className="btn" onClick={fetchNewAdvice}>
          Generate New advice
        </button>
      </div>
    );
  }
  export default Advice;