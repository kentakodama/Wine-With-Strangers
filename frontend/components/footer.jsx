import React from 'react';
import {Link} from 'react-router-dom';


const Footer = () => (
  <div className="footer-component">
    <div className="footer-links">
      <Link to="/about">ABOUT</Link>
      <Link to="/cities">CITIES</Link>
      <Link to="/signup">SIGN UP</Link>
      <Link to="/signup">FACEBOOK</Link>
    </div>
    <div className="final-info">
      <p>Tea With Strangers is all about making our cities feel more like neighborhoods. We're more "connected" than ever before, but we're also more alone. And all we want to do is bring people together because, well, the world is better that way.</p>
      </div>
  </div>
);

export default Footer;
