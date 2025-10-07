import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import Logo from "../../../images/Footer_logo.webp";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-left col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
          <img src={Logo} alt="Geeco Pumps" className="footer-logo" />
          <p className="footer-text">
            At Geeco Pumps, We Are A Globally Renowned Manufacturer Of
            High-Quality, Innovative Pump Solutions. With Decades Of Expertise
            In The Industry
          </p>
          <div className="footer-socials">
            <Link><FaFacebookF /></Link>
            <Link><FaInstagram /></Link>
            <Link><FaYoutube /></Link>
          </div>
        </div>

        {/* Middle Section */}
        <div className="footer-links col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
          <h4 className="Footer_QuickLink_headings">Quick Link</h4>
          <ul>
            <li><Link to="/"  onClick={() => window.scrollTo(0, 0)}>Home</Link></li>
            <li><Link to="/all-pumps-categories" onClick={() => window.scrollTo(0, 0)}>All Pumps</Link></li>
            <li><Link to="/pump-selection-tool"  onClick={() => window.scrollTo(0, 0)}>Pump Selection Tool</Link></li>
            <li><Link to="/warranty-registration" onClick={() => window.scrollTo(0, 0)}>Warranty Registration</Link></li>
            <li><Link to="/contact-us"  onClick={() => window.scrollTo(0, 0)}>Contact Us</Link></li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="footer-links col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
          <h4 className="Footer_QuickLink_headings">Quick Link</h4>
          <ul>
            <li><Link to="/"  onClick={() => window.scrollTo(0, 0)}>Home</Link></li>
            <li><Link to="/all-pumps-categories" onClick={() => window.scrollTo(0, 0)}>All Pumps</Link></li>
            <li><Link to="/pump-selection-tool"  onClick={() => window.scrollTo(0, 0)}>Pump Selection Tool</Link></li>
            <li><Link to="/warranty-registration" onClick={() => window.scrollTo(0, 0)}>Warranty Registration</Link></li>
            <li><Link to="/contact-us"  onClick={() => window.scrollTo(0, 0)}>Contact Us</Link></li>
          </ul>
        </div>

        {/* Address */}
        <div className="footer-address col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
          <h4>Address</h4>
          <p>
            1/42, Venkateswara Nagar,<br />
            Koundampalayam, Coimbatore,<br />
            Tamil Nadu 641030.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
