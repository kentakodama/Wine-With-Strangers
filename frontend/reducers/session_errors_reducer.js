import merge from 'lodash/merge';
import {RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER} from '../actions/session_actions';

//must set oldState to something cant be undefined,
// empty array only the errors slice
const SessionErrorsReducer = (oldState = [], action) => {
  Object.freeze(oldState);
  let newState;
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    case RECEIVE_CURRENT_USER:
      return [];
    default:
      return oldState;
  }

};

export default SessionErrorsReducer;
