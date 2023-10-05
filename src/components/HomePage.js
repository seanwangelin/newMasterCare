import React, { useState, useEffect } from "react";

export default function HomePage() {

  const getManagers = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/managers/", {
        method: 'GET',
        headers: {
          "Content-Type": "application/json"
        },
      });
      const result = await response.json();
      console.log("PROP MGRS:", result);
      return result;
    } catch (err) {
      throw err;
    }
  };

  useEffect(() => {
    getManagers()
  })

  return (
    <>
      <div>hellooooooo</div>
    </>
  );
}
