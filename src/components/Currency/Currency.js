import React from 'react';
import './Currency.css';

const coindeskURL = 'https://api.coindesk.com/v1/bpi/currentprice/';

function Currency(props) {
  return (
    <div>
      <h1>{props.match.params.currency} price in "stock name goes here"</h1>
      <div className="price">price goes here</div>
    </div>
  );
}

export default Currency;
