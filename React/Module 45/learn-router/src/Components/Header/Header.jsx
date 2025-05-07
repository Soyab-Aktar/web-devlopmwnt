import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav>Navbar</nav>
      <div className="flex justify-between gap-4">
        <Link className="bg-cyan-300 p-4 rounded-md" to="/">
          Home
        </Link>
        <Link className="bg-cyan-300 p-4 rounded-md" to="/users">
          Users
        </Link>
        <Link className="bg-cyan-300 p-4 rounded-md" to="/about">
          About
        </Link>
        <Link className="bg-cyan-300 p-4 rounded-md" to="/contact">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Header;
