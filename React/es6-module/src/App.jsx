import { useState } from "react";
import "./App.css";
import Watch from "./Components/Watch/Watch";
import { useEffect } from "react";

function App() {
  const [watches,setWatches] = useState([]);
  useEffect(()=>{
    fetch('watches.json')
    .then(res=>res.json())
    .then(data => setWatches(data));
  }, [])
  // const watches = [
  //   {
  //     id: 1,
  //     name: "Apple Watch Series 9",
  //     company: "Apple",
  //     price: 399,
  //   },
  //   {
  //     id: 2,
  //     name: "Galaxy Watch 6",
  //     company: "Samsung",
  //     price: 329,
  //   },
  //   {
  //     id: 3,
  //     name: "Garmin Forerunner 265",
  //     company: "Garmin",
  //     price: 449,
  //   },
  //   {
  //     id: 4,
  //     name: "Fitbit Sense 2",
  //     company: "Fitbit",
  //     price: 249,
  //   },
  //   {
  //     id: 5,
  //     name: "Amazfit GTR 4",
  //     company: "Amazfit",
  //     price: 199,
  //   },
  // ];

  return (
    <>
      {watches.map((watch) => (
        <Watch key={watch.id} watch={watch}></Watch>
      ))}
    </>
  );
}

export default App;
