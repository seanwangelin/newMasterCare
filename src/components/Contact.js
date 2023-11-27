import React, { useState, useEffect } from "react";
import "../style/contact.css";
const emailImage = require("../assets/email.png");
const phoneImage = require("../assets/calling.png");

export default function Contact({ managerArray, setManagerArray }) {
  const getManagers = async () => {
    let managers = [];

    try {
      const response = await fetch("http://localhost:4000/api/managers/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();
      result.map((singleResult) => {
        managers.push(singleResult);
      });
      // console.log('MANAGERS: ', managers)
      setManagerArray(managers);

      return result;
    } catch (err) {
      throw err;
    }
  };

  useEffect(() => {
    getManagers();
  }, []);
  console.log("MANAGERS: ", managerArray);

  return (
    <>
      <div id="contactContainer">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.9260393700333!2d-87.77972068853371!3d41.894447671120005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e34aa1494abc9%3A0x990ad78d4f8eeb26!2s41%20Chicago%20Ave%2C%20Oak%20Park%2C%20IL%2060302!5e0!3m2!1sen!2sus!4v1701029188364!5m2!1sen!2sus"
            width="600"
            height="450"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <div id="contactInfoContainer">
            <div id="contactMcare">Mastercare Building Services</div>
            <div>
              <div>41 Chicago Ave.</div>
              <div>Oak Park, IL 60302</div>
            </div>
            <a href="tel:7083582634">708-358-2634</a>
          </div>
      </div>
    </>
  );
}
