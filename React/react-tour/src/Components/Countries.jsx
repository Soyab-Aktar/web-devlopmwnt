import { useEffect } from "react";
import { useState } from "react";
import Country from "./Country/Country";
import "./Countries.css";
const Countries = () => {
  const [countries, setCountries] = useState([]);

  const [visitedCountry, setVisitedCountry] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handleAdd = country => {
    const newvisited = [...visitedCountry, country];
    setVisitedCountry(newvisited);
    console.log("added");
    console.log(country);
  };
  return (
    <div>
      <h3>Total Countries: {countries.length} </h3>

      <div className="selected-Container">
        <h3>Visited Countries : {visitedCountry.length}</h3>
        <ul>
            {
                visitedCountry.map(country => <li key={country.cca3}>{country.name?.common || "No Name Available"}</li>)
            }
        </ul>
        
      </div>

      <div className="main-container">
        {countries.map((country) => (
          <Country
            key={country.cca3}
            country={country}
            handleAdd={handleAdd}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
