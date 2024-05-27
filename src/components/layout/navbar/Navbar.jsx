import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      className="w-full auto flex justify-between items-center mt-5 py-6 px-4 bg-customGray"
      style={{ color: "#f9f7f3" }}
    >
      <Link to="/">
        <span className="text-4xl bg-customGray">James</span>
        <span className="font-bold text-4xl bg-customGray">OrozcoH</span>
      </Link>

      <div className="md:flex space-x-12 font-bold bg-customGray text-">
        <Link
          to="/"
          className="hover:bg-orange-400 hover:text-white px-3 py-2 rounded-md bg-customGray"
          style={{ color: "#f9f7f3" }}
        >
          Home
        </Link>
        <Link
          to="/about"
          className="hover:bg-orange-400 hover:text-white px-3 py-2 rounded-md bg-customGray"
          style={{ color: "#f9f7f3" }}
        >
          About
        </Link>
        <Link
          to="/skills"
          className="hover:bg-orange-400 hover:text-white px-3 py-2 rounded-md bg-customGray "
          style={{ color: "#f9f7f3" }}
        >
          Skills
        </Link>
        <Link
          to="/projects"
          className="hover:bg-orange-400 hover:text-white px-3 py-2 rounded-md bg-customGray"
          style={{ color: "#f9f7f3" }}
        >
          Projects
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
