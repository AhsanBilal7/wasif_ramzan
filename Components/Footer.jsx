import React from "react";
import footerStyles from "../styles/Navbar.module.css";

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <p>
        Made with <span className={footerStyles.heart}>❤️</span> by{" "}
        <a
          href="https://www.instagram.com/wasif.ramzan.58?utm_source=qr&igsh=eDM4aWRycDRlMGI2"
          target="_blank"
          rel="noopener noreferrer"
          className={footerStyles.linkedinLink}
        >
          Wasif 
        </a>
      </p>
    </footer>
  );
};

export default Footer;