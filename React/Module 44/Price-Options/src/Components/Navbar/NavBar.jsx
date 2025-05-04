import { useState } from "react";
import Link from "./Link/Link";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { AiOutlineCloseSquare } from "react-icons/ai";

const NavBar = () => {
  const [open, setopen] = useState(false);
  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "*", name: "NotFound" },
  ];

  return (
    <nav>
      <div className="md:hidden" onClick={() => setopen(!open)}>
        {open === true ? (
          <AiOutlineCloseSquare className="text-3xl" />
        ) : (
          <HiOutlineMenuAlt1 className="text-3xl" />
        )}
      </div>
      <ul
        className={`md:flex gap-10 duration-500 absolute md:static ${
          open ? "top-16" : " -top-60"
        } bg-lime-200 text-black rounded-md p-4 font-semibold shadow-2xl`}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
