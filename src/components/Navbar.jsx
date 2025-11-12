import PageLinks from './PageLinks';
import SocialLinks from './SocialLinks';
import Registration from './Registration';
import {Link} from "react-router-dom";
import React from "react";

const Navbar = () => {
  return (
    <>
      <PageLinks parentClass="nav-links" itemClass="nav-link" />
      <SocialLinks parentClass="nav-icons" itemClass="nav-icon" />

    </>
  );
};

export default Navbar;
