import React, { useState, useEffect, submitForm, Button } from "react";


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
   <style type="text/css">
    {`
    .flat {
      background-color: black;
      color: white;
      display: flex;
      justify-content:center;
    }
    `}
    </style>
        <div className="advice">
          <h2>{Advice}</h2>
        </div>
        <br />
        <button className="flat" onClick={fetchNewAdvice}>
          Get Text
        </button>
      </div>
    );
  }
  export default Advice;