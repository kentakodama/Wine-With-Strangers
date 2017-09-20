
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
  const generalGreeting = () => (
    <div>
      <Link to='/signup'>Sign Up</Link>
      <Link to='/login'>Login</Link>
    </div>
  );


const Greeting = ({currentUser, logout}) => (
  currentUser ? userGreeting(currentUser, logout) : generalGreeting()
);


export default Greeting;
