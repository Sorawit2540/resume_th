import "./App.css";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <footer className="bg-footer App Textcolor-footer body_text">
      <div className="text-center">
        <a target="_blank" href="https://facebook.com/sorawit.ruangsri">
          <FontAwesomeIcon icon={faFacebookF} size="2x" className="Textcolor-footer" />{" "}</a>
        <a target="_blank" href="https://mail.google.com/mail/?view=cm&fs=1&to=sorawit.ruangsri@gmail.com">
        <FontAwesomeIcon icon={faGoogle} size="2x" className="Textcolor-footer" /></a>
        <p>SORAWIT RUANGSRI</p>
      </div>
    </footer>
  );
};

export default Example;
