import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-primary text-primary-content justify-between">
      <button className="btn btn-ghost text-xl">Learn Auth</button>
      <div>
        <NavLink className="btn btn-ghost text-xl " to="/">
          Home
        </NavLink>
        <NavLink className="btn btn-ghost text-xl " to="/login">
          Login
        </NavLink>
        <NavLink className="btn btn-ghost text-xl " to="/register">
          Register
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
