
//entry file

import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import {requestAllLocations, requestLocation} from './actions/location_actions';
//testing
import {getLocation, getAllLocations} from './util/location_api_util';
import {login, logout, signup} from './actions/session_actions';
//DONT IMPORT AJAX CALLS DIRECTLY!
//IMPORT THE ACTIONS! THAT USE THE AJAX CALLS~!

document.addEventListener('DOMContentLoaded', () => {
  let store;  //dont put store directly on window

  //below is boot strapping.
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  //testing
  window.login = login;
  window.logout = logout;
  window.signup = signup;
  window.getState = store.getState; //indirectly setting store is best
  window.dispatch = store.dispatch;
  window.requestAllLocations = requestAllLocations;
  window.getLocation = getLocation;
  window.getAllLocations = getAllLocations;


  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});
