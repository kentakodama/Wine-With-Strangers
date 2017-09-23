
import React from 'react';
import {Link} from 'react-router-dom';

const MainPage = () => (
  <div className="main-page">
    <h1>welcome to the main page!</h1>
    <div>
      <Link to='/signup' className="signup-button">MEET STRANGERS NOW</Link>
    </div>
    
  </div>
);

export default MainPage;
