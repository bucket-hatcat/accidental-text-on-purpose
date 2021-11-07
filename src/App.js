import React, {useState, useEffect} from 'react';
import './App.css';

function App() {

  const [advice, setadvice] = useState("");
  // https://api.adviceslip.com/advice

  useEffect(() => {
    fetch("https://api.adviceslip.com/advice")
      .then(res => res.json())
      .then(
        (advice) => {
          setadvice(advice.content);  

        }
      )
  },[]);

  let fetchNewadvice = () => {
    fetch("http://api.quotable.io/random")
      .then(res => res.json())
      .then(
        (advice) => {
          setadvice(advice.content);  

        }
      )
  }
  return (
    <div className="App">
         <div className="advice">
            <h2>{advice}</h2>

         </div><br />
         <button className="btn" onClick={fetchNewadvice}>Generate New advice</button>
    </div>
  );
}

export default App;
