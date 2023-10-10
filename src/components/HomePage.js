import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

export default function HomePage() {
  const [managerArray, setManagerArray] = useState([]);

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

  console.log(managerArray);

  return (
    <>
      {managerArray.map((manager) => {
        return (
          <div key={manager.id}>
            <div>{manager.name}</div>
            {manager.title?<div>{manager.title}</div>:null}
            {manager.phone?<a href={`tel:${manager.phone}`}>{manager.phone}</a>:null}
            {manager.email?<a href={`mailto:${manager.email}`}>{manager.email}</a>:null}
          </div>
        )
      })}
    </>
  );
}
