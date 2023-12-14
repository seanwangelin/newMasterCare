import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../style/navbar.css";
import "../style/header.css";

export default function Navbar({ adminLoggedIn }) {
  const location = useLocation();
  const logout = (event) => {
    event.preventDefault();
    localStorage.removeItem("username");
    window.location.reload();
  };

  window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;
    const threshold = 100;
    const scrollChangeHeader = document.querySelector("#navbar");

    if (scrollPosition > threshold) {
      scrollChangeHeader.classList.add("scrolled");
    } else {
      scrollChangeHeader.classList.remove("scrolled");
    }
  });

  useEffect(() => {
    console.log(adminLoggedIn);
  });

  return (
    <>
      <div id="navbarContainer">
        <div id="navbar">
          <Link to="/" id="headerText">
            <div id="mcareHeader">Mastercare</div>
            <div id="bldgServHeader">Building Services</div>
          </Link>

          <Link to="/Contact" className="navLink">
            Contact
          </Link>

          <a href="https://www.homewisedocs.com/" className="navLink">
            Request Sales/Finance Docs
          </a>

          <Link to="/Services" className="navLink">
            Services
          </Link>

          <Link to="/About" className="navLink">
            About us
          </Link>
          <a href="mailto:bill@mcareservices.com" className="navLinkBold">
            Free Evaluation
          </a>
          <a
            href="https://oakparkapartments.securecafe.com/residentservices/mastercare-building-services-inc/userlogin.aspx"
            className="navLinkBold"
          >
            Condo Owner Login
          </a>
          {adminLoggedIn === true ? (
            <a className="navLink" onClick={(event) => logout(event)}>
              log out
            </a>
          ) : null}
        </div>
      </div>
      <div id="subHeaderContainer">
        {location.pathname === "/" ? (
          <div id="header">
            <div id="subtitle">Condominium Management Professionals</div>
            <div id="subtitle2">since 1986</div>
            <div id="subLinkContainer">
              <Link to="/Services" className="subLink">
                Services
              </Link>
              <Link to="/About" className="subLink">
                About us
              </Link>
            </div>
          </div>
        ) : location.pathname === "/About" ? (
          <div className="subHeader">About Us</div>
        ) : location.pathname === "/Contact" ? (
          <div className="subHeader">Contact Us</div>
        ) : location.pathname === "/Services" ? (
          <div className="subHeader">Services</div>
        ) : null}
      </div>
    </>
  );
}
