import * as React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import About from "./Components/About";
import Home from "./Components/Home";
import RandomWords from "./Components/RandomWords";
import NoMatch from "./Components/NoMatch";
import Header from './Components/Header';

function App() {
return (
<div>
      <h1>Basic Example</h1>
<Header />
<Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
    </div>
)
}
export default App;