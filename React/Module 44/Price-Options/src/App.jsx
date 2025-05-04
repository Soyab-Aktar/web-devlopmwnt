import "./App.css";
import Nav from "./Components/DaisyNav/Nav";
import NavBar from "./Components/Navbar/NavBar";
import PropTypes from "prop-types";
import PriceOptions from "./Components/PriceOptions/PriceOptions";

function App() {
  return (
    <div>
      <NavBar></NavBar>
      {/* <Nav></Nav> */}
      <PriceOptions></PriceOptions>
    </div>
  );
}

export default App;
