import merge from 'lodash/merge';
import {RECEIVE_EVENT_ERRORS} from '../actions/event_actions';

//must set oldState to something cant be undefined,
// empty array only the errors slice
const EventErrorsReducer = (oldState = [], action) => {
  Object.freeze(oldState);
  let newState;
  switch (action.type) {
    case RECEIVE_EVENT_ERRORS:
      return action.errors;
    default:
      return oldState;
  }

};

export default EventErrorsReducer;
