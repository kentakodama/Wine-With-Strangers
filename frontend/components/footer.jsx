import React from 'react';
import {Link} from 'react-router-dom';


const Footer = () => (
  <div className="footer-component">
    <div className="footer-logo" >
      <img src="https://res.cloudinary.com/dql6mlrow/image/upload/v1506683563/Screen_Shot_2017-09-29_at_4.11.56_AM_p8eoyp.png"/>
    </div>
    <div className="footer-links">
      <Link className="footer-link" to="/about">About</Link>
      <Link className="footer-link" to="/locations">Cities</Link>
      <Link className="footer-link" to="/dashboard">Dashboard</Link>
      <a className="footer-link" href="https://github.com/kentakodama">GitHub</a>
      <a className="footer-link" href="https://www.facebook.com/kentakodama">Facebook</a>
      <a className="footer-link" href="https://www.linkedin.com/in/kenta-kodama-59b85232/">Linkedin</a>
    </div>
  </div>
);

export default Footer;
