import React from 'react';

import './Footer.css';

function Footer() {
  return (
    <div className="footerParentDiv">
      <div className="content">
        <div>
          <div className="footerHead">
            <p>POPULAR LOCATIONS</p>
          </div>
          <div className="list">
            <ul>
              <li>Bhopal</li>
              <li>Indore</li>
              <li>Delhi</li>
              <li>Pune</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="footerHead">
            <p>ABOUT US</p>
          </div>
          <div className="list">
            <ul>
              <li>B2C Tech Group</li>
              <li>Careers</li>
              <li>Contact Us</li>
              <li>B2C Tech Farmers</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="footerHead">
            <p>B2C Tech Farming</p>
          </div>
          <div className="list">
            <ul>
              <li>Help</li>
              <li>Sitemap</li>
              <li>Legal & Privacy information</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer">
        <p>Other Countries China - Nepal - Bhutan</p>
        <p>© 2023 B2C Tech Farming Pvt Ltd. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
