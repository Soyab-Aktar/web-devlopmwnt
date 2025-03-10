import { useState } from "react";
import "./Country.css";
const Country = ({ country, handleAdd }) => {
  // console.log(country);
  const { name, flags } = country;
  const [visited, setVisited] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const handlebtn = () => {
    setVisited(!visited);
    console.log("Clicked");
  };
  const handleAddBtn = () => {
    handleAdd(country); // This will add the country to the list
    setDisabled(true); // This will disable the button
  };

  return (
    <div className="country-container">
      <h3>Country Name: {name.common} </h3>
      <img src={flags.png} className="flag-css" />

      <button className={visited ? "btn1" : "btn2"} onClick={handlebtn}>
        {visited ? "Visited" : "Click for Visit"}
      </button>

      <button
        onClick={handleAddBtn}
        disabled={disabled} // This will disable the button after adding
      >
        {disabled ? "Already Added" : "ADD"}
      </button>
    </div>
  );
};

export default Country;
