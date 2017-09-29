import * as EventAPIUtil from '../util/event_api_util';
import * as DashboardAPIUtil from '../util/dashboard_util_api';

export const RECEIVE_EVENTS = "RECEIVE_EVENTS";
export const RECEIVE_EVENT = "RECEIVE_EVENT";

export const createNewEvent  = (event) => (dispatch) => {
  return EventAPIUtil.createNewEvent(event)
  .then(
    events => (dispatch(receiveEvents(events)))
  );
};

export const updateEvent = (event) => (dispatch) => {
  return EventAPIUtil.patchEvent(event)
  .then(
    response => (dispatch(receiveEvent(response)))
  );
};

export const receiveEvents = (events) => ({
  type: RECEIVE_EVENTS,
  events: events.event_details
});
export const receiveEvent = (event) => ({
  type: RECEIVE_EVENT,
  event
});

export const requestUserEvents = () => (dispatch) => {
  return DashboardAPIUtil.getUserEvents()
  .then(
    events => (dispatch(receiveEvents(events)))
  );
};




//create api util for create new events
//when in events controller must return the entire events slice of state not just what was updated
