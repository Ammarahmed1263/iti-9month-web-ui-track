import React, { Component } from "react";
import SocialIcon from "../SocialIcon";
import "./styles.css";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="footer container">
          <div className="footer-newsletter">
            <h2>Subscribe to our newsletter</h2>
            <form className="newsletter-form">
              <input type="email" placeholder="Enter Your Email" required />
              <button type="submit" aria-label="Subscribe">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </button>
            </form>
          </div>

          <div className="footer-content">
            <h1 className="footer-logo">INNOVATE<span className="brand-dot">.</span></h1>
            <nav>
              <ul className="footer-nav">
                <li><a href="#">About</a></li>
                <li><a href="#">Features</a></li>
                <li><a href="#">Categories</a></li>
                <li><a href="#">Support</a></li>
              </ul>
            </nav>
            <div className="footer-socials">
              <SocialIcon name="facebook" color="currentColor" />
              <SocialIcon name="twitter" color="currentColor" />
              <SocialIcon name="linkedin" color="currentColor" />
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2026 INNOVATE. All rights reserved.</p>
            <div className="terms">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
