import merge from 'lodash/merge';
import {RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER} from '../actions/session_actions';


export default(oldState = {currentUser: null, errors: []}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      let newState = merge({}, oldState);
      newState.currentUser = action.user;
      return newState;
    default:
      return oldState;
  }
};
