import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { default as HomeHeader } from "./HomeHeader";
import "../style/HomePage.css";

export default function HomePage({ descriptionsArray }) {
  const [deletedService, setDeletedService] = useState("");
  const [newService, setNewService] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newDescriptionTitle, setNewDescriptionTitle] = useState("");
  const [deletedDescription, setDeletedDescription] = useState("");
  const [deletedDescriptionTitle, setDeletedDescriptionTitle] = useState("");

  const addNewService = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:4000/api/services/newService`,
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            service: newService,
          }),
        }
      );

      const result = await response.json();

      return result;
    } catch (err) {
      throw err;
    }
  };
  const addNewDescription = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:4000/api/descriptions/newDescription`,
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            description: newDescription,
            title: newDescriptionTitle,
          }),
        }
      );

      const result = await response.json();

      return result;
    } catch (err) {
      throw err;
    }
  };

  const deleteService = async (event, serviceID) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:4000/api/services/delete/${serviceID}`,
        {
          method: "Delete",
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      let result = await response.json();
      console.log(result);
      // return result;
    } catch (err) {
      throw err;
    }
  };

  const deleteDescription = async (event, descriptionID) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:4000/api/descriptions/delete/${descriptionID}`,
        {
          method: "Delete",
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      let result = await response.json();
      console.log(result);
      // return result;
    } catch (err) {
      throw err;
    }
  };

  console.log("DESCRIPTONS ARRAY: ", descriptionsArray);

  return (
    <>
      <HomeHeader />
      <div id="homePageContentContainer">
        {descriptionsArray.map((description) => {
          return description.title ===
            "Welcome to Mastercare Building Services Inc" ? (
            <>
              <div key="description.id" className="descriptionContainer">
                <div className="descriptionTitle">{description.title}</div>
                <div className="innerContainer">
                  <img src="https://pixy.org/images/placeholder.png" />

                  <div className="description">{description.description}</div>
                </div>
              </div>
            </>
          ) : null;
        })}

        {descriptionsArray.map((description) => {
          return description.title === "Our Mission Statement" ? (
            <>
              <div key="description.id" className="descriptionContainerRight">
                <div className="descriptionTitleRight">{description.title}</div>
                <div className="innerContainerRight">
                  <img
                    src="https://pixy.org/images/placeholder.png"
                    className="imgRight"
                  />

                  <div className="descriptionRight">
                    {description.description}
                  </div>
                </div>
              </div>
            </>
          ) : null;
        })}
      </div>

      {/* {managerArray.map((manager) => {
        return (
          <div key={manager.id}>
            <div>{manager.name}</div>
            {manager.title?<div>{manager.title}</div>:null}
            {manager.phone?<a href={`tel:${manager.phone}`}>{manager.phone}</a>:null}
            {manager.email?<a href={`mailto:${manager.email}`}>{manager.email}</a>:null}
          </div>
        )
      })}

      {}
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <form onSubmit={(event) => deleteService(event, deletedService)}>
        <label>Delete service:</label>
        <input type="text" value={deletedService} onChange={(event) => setDeletedService(event.target.value)}></input>
        <button type="submit" name="deleteService">Delete</button>
      </form>

      <form onSubmit={(event) => addNewService(event)}>
        <label>Add service:</label>
        <input type="text" value={newService} onChange={(event) => setNewService(event.target.value)}></input>
        <button type="submit" name="addService">Add</button>
      </form>

      <form onSubmit={(event) => deleteDescription(event, deletedDescription)}>
        <label>Delete description:</label>
        <input type="text" value={deletedDescription} onChange={(event) => setDeletedDescription(event.target.value)}></input>
        <button type="submit" name="deleteDescription">Delete</button>
      </form>

      <form onSubmit={(event) => addNewDescription(event)}>
        <label>Add description title:</label>
        <input type="text" value={newDescriptionTitle} onChange={(event) => setNewDescriptionTitle(event.target.value)}></input>
        <label>Add description:</label>
        <input type="text" value={newDescription} onChange={(event) => setNewDescription(event.target.value)}></input>
        <button type="submit" name="addDescription">Add</button>
      </form> */}
    </>
  );
}
