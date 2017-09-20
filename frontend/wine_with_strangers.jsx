
//entry file

import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

//testing
import {login, logout, signup} from './actions/session_actions';
//DONT IMPORT AJAX CALLS DIRECTLY!
//IMPORT THE ACTIONS! THAT USE THE AJAX CALLS~!

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore(); //dont put store directly on window

  window.login = login;
  window.logout = logout;
  window.signup = signup;
  window.getState = store.getState; //indirectly setting store is best
  window.dispatch = store.dispatch;


  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});
