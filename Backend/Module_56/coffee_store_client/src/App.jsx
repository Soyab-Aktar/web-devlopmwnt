import { useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeCard from "./components/CoffeeCard";
import { useState } from "react";

function App() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);
  return (
    <div>
      <h1 className="text-3xl mb-3 font-bold">Coffee Store</h1>
      <h3 className="text-sm mb-4 font-normal">
        Available Coffee : {coffees.length}
      </h3>
      <div className="grid grid-cols-2 gap-3">
        {coffees.map((coffee) => (
          <CoffeeCard
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
            key={coffee._id}
          ></CoffeeCard>
        ))}
      </div>
    </div>
  );
}

export default App;
