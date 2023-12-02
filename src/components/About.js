import React, { useState, useEffect } from "react";
import "../style/About.css";

export default function About({ descriptionsArray }) {
  
  return (
    <>
      {descriptionsArray.map((description) => {
        return description.title === "Our Experience" ? (
          <>
            <div key="description.id" className="aboutDescriptionContainer">
              <div className="aboutDescriptionTitle">{description.title}</div>
              <div className="aboutInnerContainer">
                <div className="aboutDescription">
                  {description.description}
                </div>
              </div>
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
                  {description.description}
                </div>
              </div>
            </div>
          </>
        ) : null;
      })}
      <div id="aboutImgContainer">
        <img src="https://pixy.org/images/placeholder.png" className='aboutImg' />
        <img src="https://pixy.org/images/placeholder.png" className='aboutImg' />
        <img src="https://pixy.org/images/placeholder.png" className='aboutImg' />
        <img src="https://pixy.org/images/placeholder.png" className='aboutImg' />
        <img src="https://pixy.org/images/placeholder.png" className='aboutImg' />
        <img src="https://pixy.org/images/placeholder.png" className='aboutImg' />
        <img src="https://pixy.org/images/placeholder.png" className='aboutImg' />
        <img src="https://pixy.org/images/placeholder.png" className='aboutImg' />
        <img src="https://pixy.org/images/placeholder.png" className='aboutImg' />
      </div>
    </>
  );
}
