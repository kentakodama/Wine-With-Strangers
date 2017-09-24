
import merge from 'lodash/merge';
import { RECEIVE_ALL_LOCATIONS, RECEIVE_LOCATION } from './action/locations_actions';

//json must be an object not array

const LocationReducer = (oldState = {}, action ) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ALL_LOCATIONS:
      return merge({}, oldState, action.locations);
    case RECEIVE_LOCATION:



      
    default:
      return oldState;
  }
}


export default LocationsReducer;
