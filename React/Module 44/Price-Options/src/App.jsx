import "./App.css";
import Nav from "./Components/DaisyNav/Nav";
import NavBar from "./Components/Navbar/NavBar";
import PropTypes from "prop-types";
import PriceOptions from "./Components/PriceOptions/PriceOptions";
import LineChart from "./Components/LineChart/LineChart";
import Phones from "./Components/Phones/Phones";

function App() {
  return (
    <div>
      <NavBar></NavBar>
      {/* <Nav></Nav> */}
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
      <Phones></Phones>
    </div>
  );
}

export default App;
