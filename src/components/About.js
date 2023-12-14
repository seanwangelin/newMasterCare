import React, { useState, useEffect } from "react";
import "../style/About.css";

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
                {/* <img src="https://pixy.org/images/placeholder.png"/> */}

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
          src="https://pixy.org/images/placeholder.png"
          className="aboutImg"
        />
        <img
          src="https://pixy.org/images/placeholder.png"
          className="aboutImg"
        />
        <img
          src="https://pixy.org/images/placeholder.png"
          className="aboutImg"
        />
        <img
          src="https://pixy.org/images/placeholder.png"
          className="aboutImg"
        />
        <img
          src="https://pixy.org/images/placeholder.png"
          className="aboutImg"
        />
        <img
          src="https://pixy.org/images/placeholder.png"
          className="aboutImg"
        />
        <img
          src="https://pixy.org/images/placeholder.png"
          className="aboutImg"
        />
        <img
          src="https://pixy.org/images/placeholder.png"
          className="aboutImg"
        />
        <img
          src="https://pixy.org/images/placeholder.png"
          className="aboutImg"
        />
      </div>
    </>
  );
}
