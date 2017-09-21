
import React from 'react';
import {Link} from 'react-router-dom';

//display the username have a logout button
  const userGreeting = (currentUser, logout) => (
    <div>
      <h3>Welcome, {currentUser.name}</h3>
      <button onClick={logout}>Log Out</button>
    </div>
  );

  //have a sign up sign in button
  const generalGreeting = (demo) => (
    <div>
      <Link to='/signup'>Sign Up</Link>
      <Link to='/login'>Login</Link>
      <button onClick={demo}>Demo</button>
    </div>
  );


const Greeting = ({currentUser, logout, demo}) => (
  currentUser ? userGreeting(currentUser, logout) : generalGreeting(demo)
);


export default Greeting;
