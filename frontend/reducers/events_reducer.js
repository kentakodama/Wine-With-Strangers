import merge from 'lodash/merge';
import { RECEIVE_ALL_LOCATIONS, RECEIVE_LOCATION } from '../actions/location_actions';
import {RECEIVE_EVENTS} from '../actions/event_actions';

const EventsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_LOCATION:
      return merge({}, oldState, action.location.event_details);
    case RECEIVE_ALL_LOCATIONS:
      return merge({}, oldState, action.locations.event_details);
    case RECEIVE_EVENTS:
      return merge({}, oldState, action.events);
    default:
      return oldState;
  }
};

export default EventsReducer;
