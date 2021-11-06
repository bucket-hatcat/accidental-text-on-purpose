import React from "react";
import "./Currencies.css";
import listOfCurrencies from "./list.json";
import { Link } from "react-router-dom";

function Currencies() {
  let currencyList = listOfCurrencies.map((item) => {
    return (
      <div className="currency" key={item.currency}>
        <p>
          <Link to={"/price/" + item.currency}>{item.currency}</Link>: {item.country}
        </p>
      </div>
    );
  });

  return <div>{currencyList}</div>;
}

export default Currencies;