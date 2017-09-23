
import React from 'react';
import {Link} from 'react-router-dom';

//display the username have a logout button
  const userGreeting = (currentUser, logout) => (
    <div className='general-greeting'>
      <button className="logout-button" onClick={logout}>Log Out</button>
      <Link to="/about">ABOUT</Link>
      <Link to="/cities">CITIES</Link>
    </div>
  );

  //have a sign up sign in button
  const generalGreeting = (demo) => (
    <div className="general-greeting">
      <Link to="/about">ABOUT</Link>
      <Link to="/cities">CITIES</Link>
      <Link to='/signup'>SIGN UP</Link>
      <Link to='/login'>LOGIN</Link>
      <button onClick={demo}>DEMO</button>
    </div>
  );



const Greeting = ({currentUser, logout, demo}) => (
  currentUser ? userGreeting(currentUser, logout) : generalGreeting(demo)
);


export default Greeting;
