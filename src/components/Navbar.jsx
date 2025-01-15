import React from "react";
import "./../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo"></div>
      <div className="container">
        <ul className="nav-links">
          <li><a href="hero.jsx">Home</a></li>
          <li><a href="About.jsx">About</a></li>
          <li><a href="ourteam.jsx">our Team</a></li>
          <li><a href="https://jagedo.co.ke/">JaGedo</a></li>
           </ul>
        
      </div>
    </nav>
  );
};

export default Navbar;
