import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav>Navbar</nav>
      <div className="flex justify-between gap-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `p-4 rounded-md ${isActive ? "bg-red-500" : "bg-cyan-300"}`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/users"
          className={({ isActive }) =>
            `p-4 rounded-md ${isActive ? "bg-red-500" : "bg-cyan-300"}`
          }
        >
          Users
        </NavLink>
        <NavLink
          to="/posts"
          className={({ isActive }) =>
            `p-4 rounded-md ${isActive ? "bg-red-500" : "bg-cyan-300"}`
          }
        >
          Posts
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `p-4 rounded-md ${isActive ? "bg-red-500" : "bg-cyan-300"}`
          }
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `p-4 rounded-md ${isActive ? "bg-red-500" : "bg-cyan-300"}`
          }
        >
          Contact
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
