import React, { useState } from "react";
import "./Header.css";
import img1 from "./images/jonnyb.jpg";
import CV from "./CV";

const Header = () => {
  const [showCV, setShowCV] = useState(false);

  const handleButtonClick = () => {
    setShowCV(!showCV);
  };

  return (
    <>
      <div id="header">
        <h3 className="header_text">React Developer you may need</h3>
        <div className="header_container">
          <img src={img1} className="image" alt="Jonny B" />
          <p className="aboutme_text">
            DEVELOPER WITH PASSION AND ATTENTION TO THE CUSTOMER WISHES. SUCCESS
            LIES TO CROSS OVER THE CUSTOMER EXPECTATIONS.
          </p>
          <button className="button" onClick={handleButtonClick}>
            KNOW ME
          </button>
        </div>
      </div>
      {showCV && <CV />}
    </>
  );
};

export default Header;
