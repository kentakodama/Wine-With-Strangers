import merge from 'lodash/merge';
import { RECEIVE_ALL_LOCATIONS, RECEIVE_LOCATION } from '../actions/location_actions';


const EventsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_LOCATION:
      return merge({}, oldState, action.location.event_details);
    case RECEIVE_ALL_LOCATIONS:
      return merge({}, oldState, action.locations.event_details);
    default:
      return oldState;
  }
};

export default EventsReducer;
