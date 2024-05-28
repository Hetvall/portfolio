import Navbar from "./navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./footer/Footer";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <div style={{ minHeight: "calc(100vh - 345px)" }}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
