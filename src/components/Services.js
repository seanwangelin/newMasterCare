import React, { useState, useEffect } from "react";
import "../style/services.css";

export default function Services({
  servicesArray,
  setServicesArray,
  descriptionsArray,
  adminLoggedIn,
  newDesc,
  setUpdatedDescription,
  updateDescription,
  isJson,
}) {
  const [newService, setNewService] = useState("");

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
      console.log("services result: ", result);

      return result;
    } catch (err) {
      throw err;
    }
  };

  const deleteService = async (serviceID) => {
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
              <div id="approachDesc">{isJson(description.description)}</div>
              {adminLoggedIn ? (
                <form
                  onSubmit={(event) => updateDescription(event, description.id)}
                >
                  <label>update description:</label>
                  <textarea className='input'
                    type="text"
                    value={newDesc}
                    onChange={(event) =>
                      setUpdatedDescription(event.target.value)
                    }
                  ></textarea>
                  <button type="submit" name="addDescription">
                    Add
                  </button>
                </form>
              ) : null}
            </>
          ) : null;
        })}
      </div>
      <div id="servicesTitle">Our list of services</div>
      <div id="servicesContainer">
        <div id="servicesCard">
          {servicesArray.map((service) => {
            return (
              <>
                <div key={service.id} className="serviceDesc">
                  • {service.service}
                </div>
                {adminLoggedIn ? (
                  <button onClick={(event) => deleteService(service.id)}>
                    Delete Service
                  </button>
                ) : null}
              </>
            );
          })}
        </div>
        {adminLoggedIn ? (
          <form onSubmit={(event) => addNewService(event)}>
            <label>Add service:</label>
            <input
              type="text"
              value={newService}
              onChange={(event) => setNewService(event.target.value)}
            ></input>
            <button type="submit" name="addService">
              Add
            </button>
          </form>
        ) : null}
      </div>
    </>
  );
}
