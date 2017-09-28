import * as EventAPIUtil from '../util/event_api_util';

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
  events
});
export const receiveEvent = (event) => ({
  type: RECEIVE_EVENT,
  event
});




//create api util for create new events
//when in events controller must return the entire events slice of state not just what was updated
