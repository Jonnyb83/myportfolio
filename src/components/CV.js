import React from "react";
import "./CV.css";
import cv from "./images/cv_jan.png"
import Navbar from "./Navbar";

const CV = () => {
  return (
    <>
    {Navbar}
    <div className="cv_container">
      <img className="cv_image" src={cv} alt="CV JB" />
    </div>
    </>
  );
};

export default CV;