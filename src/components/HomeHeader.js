import React, { useState, useEffect } from "react";
import "../style/header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
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
    </>
  );
}
