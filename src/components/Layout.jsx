import { Outlet, Link } from "react-router-dom";
import Header from "./Header";
import Hero from "./Hero";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <nav className="navbar">
        <Header />
        <Hero />
        {/** Duplicated navigation links, I think it's learning so keep it there **/}
        <div style={{ position: "relative", left: "35%" }}>
          <ul className="nav-links">
            <li className="nav-link">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-link">
              <Link to="/about">About</Link>
            </li>
            <li className="nav-link">
              <Link to="/services">Services</Link>
            </li>
            <li className="nav-link">
              <Link to="/tours">Tours</Link>
            </li>
            <li className="nav-link">
              <Link to="/registration">Registration</Link>
            </li>
          </ul>
        </div>
      </nav>

      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
