import React from "react";
import facebook from "../components/images/facebook_new.png";
import github from "../components/images/github_new.png";
import linkedin from "../components/images/linkedin_new.png";
import "../pages/Contact.css";

const Contact = () => {
  return (
    <div className="footer">
      <div className="footer_images">
        <a href="https://www.facebook.com/jan.bodi.921" target="_blank" rel="noopener noreferrer">
          <img className="img" src={facebook} alt="Facebook" />
        </a>
        <a href="https://github.com/Jonnyb83" target="_blank" rel="noopener noreferrer">
          <img className="img" src={github} alt="GitHub" />
        </a>
        <a href="https://www.linkedin.com/in/jan-bodi77" target="_blank" rel="noopener noreferrer">
          <img className="img" src={linkedin} alt="LinkedIn" />
        </a>
      </div>
    </div>
  );
};

export default Contact;