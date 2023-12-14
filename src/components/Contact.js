import React, { useState, useEffect } from "react";
import "../style/contact.css";
const emailImage = require("../assets/email.png");
const phoneImage = require("../assets/calling.png");

export default function Contact({
  managerArray,
  setManagerArray,
  adminLoggedIn,
  isJson,
}) {
  const [managerName, setManagerName] = useState("");
  const [managerPhone, setManagerPhone] = useState("");
  const [managerEmail, setManagerEmail] = useState("");
  const [managerTitle, setManagerTitle] = useState("");

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

  const createManager = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        "http://localhost:4000/api/managers/newManager/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: managerName,
            title: managerTitle,
            phone: managerPhone,
            email: managerEmail,
          }),
        }
      );
      const result = await response.json();

      console.log("NEW MANAGER RESULT: ", result);

      return result;
    } catch (err) {
      throw err;
    }
  };

  const deleteManager = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:4000/api/managers/delete/${id}`,
        {
          method: "delete",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const result = await response.json();
      console.log("delete result: ", result);
    } catch (err) {
      throw err;
    }
  };

  const updateManagerName = async (event, id) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:4000/api/managers/updateManagerName/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            newName: managerName,
          }),
        }
      );
      const result = await response.json();
      return result;
    } catch (err) {
      console.error(err);
    }
  };

  const updateManagerTitle = async (event, id) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:4000/api/managers/updateManagerTitle/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            newTitle: managerTitle,
          }),
        }
      );
      const result = await response.json();
      return result;
    } catch (err) {
      console.error(err);
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
          <a href="tel:7083582634" id="contactMainPhone">
            708-358-2634
          </a>
        </div>
      </div>
      <div id="managerCardContainer">
        {managerArray.map((manager) => {
          return (
            <>
              <div key={manager.id} className="managerCard">
                <div>
                  <div className="managerName">{manager.name}</div>

                  {manager.title ? (
                    <div className="managerTitle">{manager.title}</div>
                  ) : null}
                </div>
                <div className="contactInfoContainer">
                  {manager.phone ? (
                    <div className="contactInfo">
                      <img src={phoneImage} className="emailImage" />
                      <a href={`tel:${manager.phone}`}>{manager.phone}</a>
                    </div>
                  ) : null}
                  {manager.email ? (
                    <div className="contactInfo">
                      <img src={emailImage} className="emailImage" />
                      <a href={`mailto:${manager.email}`}>{manager.email}</a>
                    </div>
                  ) : null}
                </div>
                {adminLoggedIn ? (
                  <button onClick={() => deleteManager(manager.id)}>
                    delete
                  </button>
                ) : null}
              </div>
            </>
          );
        })}
      </div>
      {adminLoggedIn ? (
        <div id="addMgrContainer">
          <form id="addMgrForm" onSubmit={(event) => createManager(event)}>
            <div id="formInputContainer">
              <label>Add manager name:</label>
              <input
                type="text"
                value={managerName}
                onChange={(event) => setManagerName(event.target.value)}
              ></input>
            </div>
            <div id="formInputContainer">
              <label>Add manager phone:</label>
              <input
                type="text"
                value={managerPhone}
                onChange={(event) => setManagerPhone(event.target.value)}
              ></input>
            </div>
            <div id="formInputContainer">
              <label>Add manager email:</label>
              <input
                type="text"
                value={managerEmail}
                onChange={(event) => setManagerEmail(event.target.value)}
              ></input>
            </div>

            <div id="formInputContainer">
              <label>Add manager title:</label>
              <input
                type="text"
                value={managerTitle}
                onChange={(event) => setManagerTitle(event.target.value)}
              ></input>
            </div>

            <button id='addMgrButton' type="submit" name="createManager">
              Add
            </button>
          </form>
        </div>
      ) : null}
    </>
  );
}
