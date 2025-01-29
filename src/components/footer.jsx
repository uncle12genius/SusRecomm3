import React from "react";
import "./../styles/Footer.css";
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

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
