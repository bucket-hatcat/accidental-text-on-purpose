import React, {Link} from "react";
import Advice from "./Advice";
import TextMessage from "./TextMessage";

function Home() {
  return (
    
    <div>
      <h1>Accidental Text on Purpose</h1>
      <p> a subterfuge whereby one sends a text intentionally to a target which is intended to be read as an accident. </p>
  <TextMessage />
  <button>
   <a href="/Advice" class="active">Next</a>
    </button>
    </div>
    
  );
}
export default Home;
