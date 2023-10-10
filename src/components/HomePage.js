import React, { useState, useEffect } from "react";

export default function HomePage() {
  const [ managerString, setManagerString ] = useState([]);
  
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
        managers.push(singleResult.name);
      });
      // console.log('MANAGERS: ', managers)
      setManagerString(managers);
      
      return result;
    } catch (err) {
      throw err;
    }
  };

  useEffect(() => {
    getManagers();
  },[])

  console.log(managerString);

  return (
    <>
      {
        managerString.map(manager => {
          return <div key={manager}>{manager}</div>
        })
      }
    </>
  );
}
