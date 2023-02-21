import React, { useState, useEffect } from "react";
import CountryCard from "../CountryCard";

export default function AllCountries() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch(`https://restcountries.com/v2/all`)
      .then((res) => res.json())
      .then((data) => setCountries(data));
  },[]);

  return (
    <div className="cardsContainer">
      {countries &&
        countries.map((item, i) => <CountryCard country={item} key={i} />)}
    </div>
  );
}
