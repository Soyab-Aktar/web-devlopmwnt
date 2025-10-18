import React from "react";
import { Link, Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <h1>Phones</h1>
      <Link to={`/phones`}>Phones</Link>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
