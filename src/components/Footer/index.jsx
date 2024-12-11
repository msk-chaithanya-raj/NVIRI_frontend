import React from "react";
import logo from "../../assests/logo.png";
import linkedinLogo from "../../assests/Linkedin.png";
import facebookLogo from "../../assests/Facebook.png";
import twitterLogo from "../../assests/Twitter.png";
import "./index.css";

const Footer = () => {
  return (
    <div className="footer-section">
      <div className="frist-container">
        <div className="get-in-touch-card">
          <div>
            <p>Get in touch with us</p>
            <div className="input-container">
              <input type="search" placeholder="Email address" />
              <div className="arrow-icon">
                <svg
                  width="16"
                  height="13"
                  viewBox="0 0 16 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.60348 13L15.3541 7.42846C15.8836 6.91519 15.8836 6.08324 15.3541 5.57154L9.60348 0L7.68647 1.8581L11.1228 5.18669H0.216125L0.216125 7.81292H11.1228L7.68647 11.1427L9.60348 13Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>
          <p>
            Hello, we are Lift Media. Our goal is to translate the positive
            effects from revolutionizing how companies engage with their clients
            & their team.
          </p>
        </div>
        <button>Book a service</button>
        <ul>
          <li>Terms</li>
          <li>Privacy</li>
          <li>Cookies</li>
          <li>Business Login</li>
        </ul>
      </div>
      <div className="second-container">
        <hr className="hr-line" />
        <div className="reach-us-out">
          <img src={logo} alt="logo" />
          <ul className="social-media-links">
            <li>
              <button>
                <img src={linkedinLogo} alt="linkedin" />
              </button>
            </li>
            <li>
              <button>
                <img src={facebookLogo} alt="facebook" />
              </button>
            </li>
            <li>
              <button>
                <img src={twitterLogo} alt="twitter" />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
