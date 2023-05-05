import React from "react";

import "../styles/Footer.css";
import Contact from "../pages/Contact";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <Contact />
      </div>
    </div>
  );
}

export default Footer;