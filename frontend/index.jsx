
//entry file

import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

//testing
import {login, logout, signup} from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore(); //dont put store directly on window

  window.login = login;
  window.logout = logout;
  window.signup = signup;
  window.getState = store.getState; //indirectly setting store is best 
  window.dispatch = store.dispatch;
  const root = document.getElementById('root');
  ReactDOM.render(<h1>Welcome to Wine With Strangers</h1>, root);
});
