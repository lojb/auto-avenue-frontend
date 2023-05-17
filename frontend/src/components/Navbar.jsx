import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "../assets";
import { state } from "../store";
import { useSnapshot } from "valtio";

const Navbar = () => {
  const snap = useSnapshot(state);

  const handleClick = () => {
    state.username = "";
    state.isUser = false;
  };

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
        {snap.isUser && (
          <div>
            <span>{snap.username}</span>
            <button onClick={handleClick}>Log out</button>
          </div>
        )}
        {!snap.isUser && (
          <div>
            <Link to="/login" className="navbar__button">
              Login
            </Link>
            <Link
              to="/register"
              className="navbar__button navbar__button--signup"
            >
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
