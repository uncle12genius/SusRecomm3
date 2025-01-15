import React from "react";
import "./../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <ul className="nav-links">
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#about">JaGedo</a></li>
           </ul>
        
      </div>
    </nav>
  );
};

export default Navbar;
