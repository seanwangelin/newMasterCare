import React, { useState, useEffect } from "react";

export default function Services({ servicesArray, setServicesArray }) {
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
  }, []);
  console.log("SERVICES: ", servicesArray);

  return (
    <>
      {servicesArray.map((service) => {
        return <div key={service.id}>{service.service}</div>;
      })}
    </>
  );
}
