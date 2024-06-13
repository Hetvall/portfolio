import { Link } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div
      className="relative w-full flex justify-between items-center mt-6 py-6 px-4 bg-customGray"
      style={{ color: "#f9f7f3" }}
    >
      <Link to="/" className="flex items-center">
        <span className="text-4xl bg-customGray">James</span>
        <span className="font-bold text-4xl bg-customGray">OrozcoH</span>
      </Link>

      <div className="md:hidden bg-customGray">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          <MdMenu style={{ backgroundColor: "#373737" }} size={32} />
        </button>
      </div>

      <div
        className={`absolute top-full left-0 w-full md:static md:w-auto md:flex md:items-center md:space-x-12 bg-customGray text-white transition-all duration-300 ${
          isOpen ? "flex flex-row items-center justify-center" : "hidden"
        } md:flex`}
      >
        <Link
          to="/"
          className="hover:bg-orange-400 hover:text-white px-3 py-2 rounded-md bg-customGray"
          style={{ color: "#f9f7f3" }}
          onClick={closeMenu}
        >
          Home
        </Link>

        <Link
          to="/about"
          className="hover:bg-orange-400 hover:text-white px-3 py-2 rounded-md bg-customGray"
          style={{ color: "#f9f7f3" }}
          onClick={closeMenu}
        >
          About
        </Link>

        <Link
          to="/skills"
          className="hover:bg-orange-400 hover:text-white px-3 py-2 rounded-md bg-customGray"
          style={{ color: "#f9f7f3" }}
          onClick={closeMenu}
        >
          Skills
        </Link>

        <Link
          to="/projects"
          className="hover:bg-orange-400 hover:text-white px-3 py-2 rounded-md bg-customGray"
          style={{ color: "#f9f7f3" }}
          onClick={closeMenu}
        >
          Projects
        </Link>
      </div>
    </div>
  );
};
export default Navbar;
