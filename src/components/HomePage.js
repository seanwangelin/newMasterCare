import React from "react";
import "../style/HomePage.css";

const img1 = require("../assets/238Wash.jpg");
const img2 = require("../assets/gprand.jpg");

export default function HomePage({
  descriptionsArray,
  adminLoggedIn,
  updateDescription,
  newDesc,
  setUpdatedDescription,
  isJson,
}) {
  return (
    <>
      <div id="homePageContentContainer">
        {descriptionsArray.map((description) => {
          return description.title ===
            "Welcome to Mastercare Building Services Inc" ? (
            <>
              <div key="description.id" className="descriptionContainer">
                <div className="descriptionTitle">{description.title}</div>
                <div className="innerContainer">
                  <img src={img1} />

                  <div className="description">
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
                      <textarea
                        className="input"
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
          return description.title === "Our Mission Statement" ? (
            <>
              <div key="description.id" className="descriptionContainerRight">
                <div className="descriptionTitleRight">{description.title}</div>
                <div className="innerContainerRight">
                  <img src={img2} className="imgRight" />

                  <div className="descriptionRight">
                    {isJson(description.description)}
                  </div>
                </div>
                {adminLoggedIn ? (
                  <form
                    onSubmit={(event) =>
                      updateDescription(event, description.id)
                    }
                  >
                    <label>update description:</label>
                    <textarea
                      className="input"
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
              </div>
            </>
          ) : null;
        })}
      </div>
    </>
  );
}
