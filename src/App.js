import "./packages/react-router-dom/examples/Animation/styles.css";

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from "./Components/Home";
import RandomWords from "./Components/RandomWords";
import TextMessage from "./Components/TextMessage";

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

const routes = [
  {
    path: "/Home",
    component: Home
  },
  {
    path: "/RandomWords",
    component: RandomWords
  },
  {
    path: "/TextMessage",
    component: TextMessage
  }
]

export default function BasicExample() {
  return (
    <Router>
      <div>
        <nav>
        
            <Link to="/Home">Home</Link>
        
            <Link to="/RandomWords">RandomWords</Link>
         
            <Link to="/TextMessage">TextMessage</Link>
        
</nav>
        <hr />

        {/*
          A <Routes> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Routes> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Routes>
          <Route exact path="/Home">

          </Route>
          <Route path="/RandomWords">
      
          </Route>
          <Route path="/TextMessage">

          </Route>
        </Routes>
      </div>
    </Router>
  );
}





