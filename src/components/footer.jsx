import React from "react";
import "./../styles/Footer.css";
import { FaFacebookF, FaInstagram,  FaLinkedinIn } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <div className="icon facebook">
          <FaFacebookF />
        </div>

        <div className="icon instagram">
          <FaInstagram />
        </div>
        
        <div className="icon linkedin">
          <FaLinkedinIn />
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;
