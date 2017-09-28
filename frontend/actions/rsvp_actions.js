
import * as RsvpAPIUtil from '../util/event_api_util';

import {receiveEvent} from './event_actions';

export const createRsvp  = (rsvp) => (dispatch) => {
  return RsvpAPIUtil.postRsvp(rsvp)
  .then(
    event => (dispatch(receiveEvent(event)))
  );
};

export const deleteRsvp  = (id) => (dispatch) => {
  return RsvpAPIUtil.postRsvp(id)
  .then(
    event => (dispatch(receiveEvent(event)))
  );
};
