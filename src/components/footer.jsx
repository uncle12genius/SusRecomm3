import React from "react"; 
import "./../styles/Footer.css";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://www.facebook.com/JaGedoBuilders" target="https://www.facebook.com/JaGedoBuilders" rel="noopener noreferrer" className="icon facebook">
          <FaFacebookF />
        </a>

        <a href="https://www.instagram.com/susrecomm/" target="https://www.instagram.com/susrecomm/" rel="noopener noreferrer" className="icon instagram">
          <FaInstagram />
        </a>

        <a href="https://www.linkedin.com/company/88956859/admin/dashboard/" target="https://www.linkedin.com/company/88956859/admin/dashboard/" rel="noopener noreferrer" className="icon linkedin">
          <FaLinkedinIn />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
