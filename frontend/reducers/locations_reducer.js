
import merge from 'lodash/merge';
import { RECEIVE_ALL_LOCATIONS, RECEIVE_LOCATION } from '../actions/location_actions';

//json must be an object not array

const LocationsReducer = (oldState = {}, action ) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ALL_LOCATIONS:
      return merge({}, oldState, action.locations.location_details);
    case RECEIVE_LOCATION:
      return merge({}, oldState, action.location.location_details);
    default:
      return oldState;
  }
};


export default LocationsReducer;
