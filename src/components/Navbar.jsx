import React from "react";
import "./../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
      {/* <img src="hero.png" alt="Logo" className="logo-image" /> */}
      </div>
      <div className="container">
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#our-team">Our Team</a></li>
          <li>
            <a href="https://jagedo.co.ke/" target="_blank" rel="noopener noreferrer">JaGedo </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
