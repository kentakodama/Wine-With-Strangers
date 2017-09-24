
import * as LocationAPIUtil from '../util/location_api_util';

export const RECEIVE_ALL_LOCATIONS = "RECEIVE_ALL_LOCATIONS";
export const RECEIVE_LOCATION = "RECEIVE_LOCATION";

export const getAllLocations = () => (dispatch) => {
  return LocationAPIUtil.getAllLocations()
  .then(
    allLocations => (dispatch(receiveAllLocations(allLocations)))
  );
};

export const getLocation = (id) => (dispatch) => {
  return LocationAPIUtil.getLocation(id)
  .then(
    location => (dispatch(receiveLocation(location)))
  );
};

export const receiveAllLocations = (locations) => ({
  type: RECEIVE_ALL_LOCATIONS,
  locations
});

export const receiveLocation = (location) => ({
  type: RECEIVE_LOCATION,
  location
});
