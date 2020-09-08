import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import "./NavBar.css"

const NavBar = () => {
  return (
    <nav>
      <Link to="/">
        <img src="logo.png" />
      </Link>
      <div className="navLinks">
        <Link to="/">Home</Link>
        <Link to="/Projects">Projects</Link>
        <Link to="/AboutUs">AboutUs</Link>
        <Link to="/ContactUs">ContactUs</Link>
      </div>
      <a className="icon">
        <FontAwesomeIcon icon={faFacebook} />
      </a>
    </nav>
  );
};

export default NavBar;
