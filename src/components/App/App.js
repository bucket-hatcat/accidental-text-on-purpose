import React, { useState } from 'react';
import Home from '../Home/Home';
import {Route, Link, Switch, Redirect} from 'react-router-dom';
import './App.css';
import Currencies from '../Currencies/Currencies';
import Currency from '../Currency/Currency';


function App() {
  const [currency, setCurrency] = useState('');

  return (
    <div>
      <nav>
        <Link to='/'><img src="https://en.bitcoin.it/w/images/en/2/29/BC_Logo_.png"alt=""/>
          <h1>Bitcoin prices</h1>
          </Link>
        <Link to="/currencies/list"> Currencies </Link>
      </nav>
      <main>
          {/* <Home /> */}
      <switch>
        <Route path='/' exact component={Home}/>
        <Route path= '/homepage' exact render={() => <Redirect to="/" /> }/>
        <Route path='/currencies/list'  exact component={Currencies}/>
        <Route path='/price/:currencySymbol'  exact render={(routerProps) => <Currency match={routerProps.match} />} />    
      </switch>
      </main>
    </div>
  );
}

export default App;
