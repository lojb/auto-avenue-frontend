import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "../assets";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo-container">
        <div className="navbar__logo-background">
          <Link to="/">
            <img src={Logo} alt="Logo" className="navbar__logo" />
          </Link>
        </div>
      </div>
      <div className="navbar__links-container">
        <Link to="/create" className="navbar__link">
          Create
        </Link>
        <Link to="/contact" className="navbar__link">
          Contact
        </Link>
        <Link to="/about" className="navbar__link">
          About
        </Link>
        <Link to="/login" className="navbar__button">
          Login
        </Link>
        <Link to="/register" className="navbar__button navbar__button--signup">
          Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
