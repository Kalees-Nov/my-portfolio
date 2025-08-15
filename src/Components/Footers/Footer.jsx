import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer gradient-bg">
      <div className="footer-content">
        <h3>Kaleeswaran E</h3>
        <p>Java Developer </p>

        <div className="footer-socials">
          <a href="https://github.com/Kalees-Nov" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="www.linkedin.com/in/kaleeswaran-eswaran-software-developer/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:kaleeswaran0711@gmail.com">Email</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Kaleeswaran E. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
