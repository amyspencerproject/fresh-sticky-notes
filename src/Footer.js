import React from "react";
import FooterIcons from "./FooterIcons";

const Footer = () => {
    return (
        <footer className="app-footer">
        <div className="footer-image-container">
          <img src="./by-amy.png" alt="the word Amy written in letters cutout from magazines" />
        </div>
        <div className="icons">
          <FooterIcons />
          </div>
      </footer>
    )
}

export default Footer;
