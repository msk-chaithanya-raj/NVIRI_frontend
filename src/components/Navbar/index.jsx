import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assests/logo.png";
import { FiMenu, FiX } from "react-icons/fi";
import "./index.css";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  const renderMenu = () => {
    return (
      <div className="nav-buttons-container-sm">
        <Link
          to="/business-login"
          className="nav-login-button nav-login-button-btn1"
        >
          <button
            style={{
              background: "none",
              border: "none",
            }}
          >
            Biz Login
          </button>
        </Link>
        <Link to="/login" className="nav-login-button nav-login-button-btn2">
          <button
            style={{
              background: "none",
              border: "none",
              color: "#fff",
            }}
          >
            Login
          </button>
        </Link>
      </div>
    );
  };
  return (
    <nav>
      <div className="navbar-container">
        <img src={logo} alt="argon logo" className="logo" />
        <div className="nav-buttons-container-lg">
          <Link
            to="/business-login"
            className="nav-login-button nav-login-button-btn1"
          >
            <button
              style={{
                background: "none",
                border: "none",
              }}
            >
              Biz Login
            </button>
          </Link>
          <Link to="/login" className="nav-login-button nav-login-button-btn2">
            <button
              style={{
                background: "none",
                border: "none",
                color: "#fff",
              }}
            >
              Login
            </button>
          </Link>
        </div>
        <button onClick={toggleMenu} className="menu-btn">
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
      {isMenuOpen && renderMenu()}
    </nav>
  );
};

export default Navbar;
