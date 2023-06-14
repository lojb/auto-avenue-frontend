import React from "react";
import { facebookLogo, instagramLogo } from "../assets";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__left">
        <h3 className="footer__company-name">Auto Avenue</h3>
        <p className="footer__credentials">
          ©2023 Auto Avenue - All rights reserved
          <br />
        </p>
      </div>
      <div className="footer__right">
        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
          <img src={facebookLogo} alt="Facebook" />
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
          <img src={instagramLogo} alt="Instagram" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
