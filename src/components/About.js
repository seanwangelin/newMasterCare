import React, { useState, useEffect } from "react";
import "../style/About.css";
const humphrey425 = require("../assets/425.jpg");
const harrison804 = require("../assets/804.jpg");
const gp1151 = require("../assets/gp1151.jpg");
const gprand = require("../assets/gprand.jpg");
const gna = require("../assets/gna.jpg");
const grove2 = require("../assets/grove2.jpg");
const park = require("../assets/park.jpg");
const wesley = require("../assets/wesley.jpg");
const wesley2 = require("../assets/wesley2.jpg");

export default function About({
  descriptionsArray,
  adminLoggedIn,
  updateDescription,
  newDesc,
  setUpdatedDescription,
  isJson,
}) {
  return (
    <>
      {descriptionsArray.map((description) => {
        return description.title === "Our Experience" ? (
          <>
            <div key="description.id" className="aboutDescriptionContainer">
              <div className="aboutDescriptionTitle">{description.title}</div>
              <div className="aboutInnerContainer">
                <div className="aboutDescription">
                  {isJson(description.description)}
                </div>
              </div>
              {adminLoggedIn ? (
                  <>
                    <form
                      onSubmit={(event) =>
                        updateDescription(event, description.id)
                      }
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
                  </>
                ) : null}
            </div>
          </>
        ) : null;
      })}

      {descriptionsArray.map((description) => {
        return description.title === "Community Involvement" ? (
          <>
            <div key="description.id" className="aboutDescriptionContainer">
              <div className="aboutDescriptionTitle">{description.title}</div>
              <div className="aboutInnerContainer">
                <div className="aboutDescription">
                  {isJson(description.description)}
                </div>
              </div>
              {adminLoggedIn ? (
                <>
                <form
                  onSubmit={(event) =>
                    updateDescription(event, description.id)
                  }
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
              </>
              ) : null}
            </div>
          </>
        ) : null;
      })}
      <div id="aboutImgContainer">
        <img
          src={humphrey425}
          className="aboutImg"
        />
        <img
          src={harrison804}
          className="aboutImg"
        />
        <img
          src={gna}
          className="aboutImg"
        />
        <img
          src={gp1151}
          className="aboutImg"
        />
        <img
          src={gprand}
          className="aboutImg"
        />
        <img
          src={grove2}
          className="aboutImg"
        />
        <img
          src={park}
          className="aboutImg"
        />
        <img
          src={wesley}
          className="aboutImg"
        />
        <img
          src={wesley2}
          className="aboutImg"
        />
      </div>
    </>
  );
}
