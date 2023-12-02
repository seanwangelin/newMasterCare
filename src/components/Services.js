import React, { useState, useEffect } from "react";
import "../style/services.css";

export default function Services({
  servicesArray,
  setServicesArray,
  descriptionsArray,
}) {
  const getServices = async () => {
    let services = [];

    try {
      const response = await fetch(`http://localhost:4000/api/services/`, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      });
      const result = await response.json();
      result.map((singleResult) => {
        services.push(singleResult);
      });

      setServicesArray(services);

      return result;
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getServices();
    console.log(descriptionsArray);
  }, []);
  console.log("SERVICES: ", servicesArray);

  return (
    <>
      <div id="approachContainer">
        {descriptionsArray.map((description) => {
          return description.title === "Our Approach" ? (
            <>
              <div id="approachTitle">{description.title}</div>
              <div id="approachDesc">{description.description}</div>
            </>
          ) : null;
        })}
      </div>
      <div id="servicesTitle">Our list of services</div>
      <div id="servicesContainer">
        <div id="servicesCard">
          {servicesArray.map((service) => {
            return (
              <div key={service.id} className="serviceDesc">
                • {service.service}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
