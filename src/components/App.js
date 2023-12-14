import React, { useState, useEffect } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
// getAPIHealth is defined in our axios-services directory index.js
// you can think of that directory as a collection of api adapters
// where each adapter fetches specific info from our express server's /api route
import { getAPIHealth } from "../axios-services";
import "../style/App.css";

import { default as HomePage } from "./HomePage";
import { default as About } from "./About";
import { default as Services } from "./Services";
import { default as Contact } from "./Contact";
import { default as Header } from "./Header";
import { default as Footer } from "./Footer";
import { default as Admin } from "./Admin";

const App = () => {
  const [APIHealth, setAPIHealth] = useState("");
  const [managerArray, setManagerArray] = useState([]);
  const [descriptionsArray, setDescriptionsArray] = useState([]);
  const [servicesArray, setServicesArray] = useState([]);
  const [adminLoggedIn, setAdminLoggedIn] = useState(false);
  const [newDesc, setUpdatedDescription] = useState("");

  useEffect(() => {
    // follow this pattern inside your useEffect calls:
    // first, create an async function that will wrap your axios service adapter
    // invoke the adapter, await the response, and set the data
    const getAPIStatus = async () => {
      const { healthy } = await getAPIHealth();
      setAPIHealth(healthy ? "api is up! :D" : "api is down :/");
    };

    const getDescriptions = async () => {
      let descriptions = [];

      try {
        const response = await fetch(
          `http://localhost:4000/api/descriptions/`,
          {
            method: "GET",
            headers: {
              "Content-type": "application/json",
            },
          }
        );

        const result = await response.json();
        console.log("descriptions: ", result);
        result.map((singleResult) => {
          descriptions.push(singleResult);
        });

        setDescriptionsArray(descriptions);

        return result;
      } catch (err) {
        throw err;
      }
    };

    localStorage.getItem("username") ? setAdminLoggedIn(true) : null;

    // second, after you've defined your getter above
    // invoke it immediately after its declaration, inside the useEffect callback
    getAPIStatus();
    getDescriptions();
  }, []);

  const isJson = (string) => {
    try {
      JSON.parse(string);
    } catch (err) {
      return string;
    }
    let almostParsedStr = JSON.parse(string);
    let parsedStr = almostParsedStr.newDesc;

    return parsedStr;
  };

  console.log(isJson({ name: "test" }));

  const updateDescription = async (event, id) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:4000/api/descriptions/updateDescription/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            newDesc: newDesc,
          }),
        }
      );
      const result = await response.json();
      return result;
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="app-container">
      <Header
        adminLoggedIn={adminLoggedIn}
        setAdminLoggedIn={setAdminLoggedIn}
      />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              descriptionsArray={descriptionsArray}
              adminLoggedIn={adminLoggedIn}
              updateDescription={updateDescription}
              newDesc={newDesc}
              setUpdatedDescription={setUpdatedDescription}
              isJson={isJson}
            />
          }
        />
        <Route
          path="/About"
          element={
            <About
              descriptionsArray={descriptionsArray}
              adminLoggedIn={adminLoggedIn}
              updateDescription={updateDescription}
              newDesc={newDesc}
              setUpdatedDescription={setUpdatedDescription}
              isJson={isJson}
            />
          }
        />
        <Route
          path="/Contact"
          element={
            <Contact
              managerArray={managerArray}
              setManagerArray={setManagerArray}
              adminLoggedIn={adminLoggedIn}
              isJson={isJson}
            />
          }
        />
        <Route
          path="/Services"
          element={
            <Services
              servicesArray={servicesArray}
              setServicesArray={setServicesArray}
              descriptionsArray={descriptionsArray}
              adminLoggedIn={adminLoggedIn}
              newDesc={newDesc}
              setUpdatedDescription={setUpdatedDescription}
              updateDescription={updateDescription}
              isJson={isJson}
            />
          }
        />
        <Route
          path="/Admin"
          element={
            <Admin
              adminLoggedIn={adminLoggedIn}
              setAdminLoggedIn={setAdminLoggedIn}
            />
          }
        />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
