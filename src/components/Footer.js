import React, { useState, useEffect } from "react";
import "../style/footer.css";

export default function Footer() {
  return (
    <div id="footer-container">
      <div id="mastercareText">
        <div id="mcare">Mastercare</div>
        <div id="bldgServ">Building Services</div>
      </div>
      <div id="addressAndPhone">
        <a href="tel:7083582634" id="phone">
          708-358-2634
        </a>
        <div id="address">41 Chicago Ave, Oak Park, IL 60302</div>
      </div>
    </div>
  );
}