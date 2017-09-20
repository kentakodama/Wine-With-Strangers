import merge from 'lodash/merge';
import {RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER} from '../actions/session_actions';

const SessionErrorsReducer = (oldState, action) => {
  Object.freeze(oldState);
  let newState;
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      newState = merge({}, oldState);
      newState.errors = action.errors;
      return newState;
    case RECEIVE_CURRENT_USER:
      newState = merge({}, oldState);
      newState.errors = [];
      return newState;
    default:
      return oldState;
  }

};

export default SessionErrorsReducer;
