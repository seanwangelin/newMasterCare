import React from "react";
import { Link } from "react-router-dom";
import "../style/navbar.css";

export default function Navbar() {
  return (
    <div id="navbarContainer">
      <div id="navbar">
        <Link to="/" id="headerText">
          <div id="mcareHeader">Mastercare</div>
          <div id="bldgServHeader">Building Services</div>
        </Link>
        <a href="mailto:bill@mcareservices.com" className="navLink">
          Free Evaluation
        </a>
        <a href="https://www.homewisedocs.com/" className="navLink">
          Request Sales/Finance Docs
        </a>
        <Link to="/Contact" className="navLink">
          Contact
        </Link>

        <Link to="/Services" className="navLink">
          Services
        </Link>

        <Link to="/About" className="navLink">
          About us
        </Link>
        <a
          href="https://oakparkapartments.securecafe.com/residentservices/mastercare-building-services-inc/userlogin.aspx"
          className="navLink"
        >
          Condo Owner Login
        </a>
      </div>
    </div>
  );
}
