import React from "react";
import { Link as ScrollLink } from "react-scroll"; // Add this import
import "./../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="hero.png" alt="Logo" className="logo-image" />
      </div>
      <div className="container">
        <ul className="nav-links">
          <li>
            <ScrollLink to="home" smooth={true} duration={800} offset={-50}>
              Home
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="about" smooth={true} duration={800} offset={-50}>
              About
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="our-team" smooth={true} duration={800} offset={-50}>
              Our Team
            </ScrollLink>
          </li>
          <li>
            <a
              href="https://jagedo.co.ke/"
              target="_blank"
              rel="noopener noreferrer"
            >
              JaGedo
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;