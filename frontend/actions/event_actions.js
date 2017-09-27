import * as EventAPIUtil from '../util/event_api_util';

export const RECEIVE_EVENTS = "RECEIVE_EVENTS";

export const createNewEvent  = (event) => (dispatch) => {
  return EventAPIUtil.createNewEvent(event)
  .then(
    events => (dispatch(receiveEvents(events)))
  );
};



//create api util for create new events
//when in events controller must return the entire events slice of state not just what was updated
