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

const App = () => {
  const [APIHealth, setAPIHealth] = useState("");
  const [managerArray, setManagerArray] = useState([]);
  const [descriptionsArray, setDescriptionsArray] = useState([]);

  useEffect(() => {
    // follow this pattern inside your useEffect calls:
    // first, create an async function that will wrap your axios service adapter
    // invoke the adapter, await the response, and set the data
    const getAPIStatus = async () => {
      const { healthy } = await getAPIHealth();
      setAPIHealth(healthy ? "api is up! :D" : "api is down :/");
    };

    // second, after you've defined your getter above
    // invoke it immediately after its declaration, inside the useEffect callback
    getAPIStatus();
  }, []);

  return (
    <div className="app-container">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              managerArray={managerArray}
              setManagerArray={setManagerArray}
              descriptionsArray={descriptionsArray}
              setDescriptionsArray={setDescriptionsArray}
            />
          }
        />
        <Route
          path="/About"
          element={
            <About
              descriptionsArray={descriptionsArray}
              setDescriptionsArray={setDescriptionsArray}
            />
          }
        />
        <Route
          path="/Contact"
          element={
            <Contact
              managerArray={managerArray}
              setManagerArray={setManagerArray}
            />
          }
        />
        <Route path="/Services" element={<Services />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
