import React from 'react';
import merge from 'lodash/merge';
//import {updateEvent} from '../../actions/event_actions';


const RsvpButton = ({currentUserId, event, updateEvent}) => {

  let newEvent = merge({}, event);
  if (event.guests.indexOf(currentUserId) === -1) {
    newEvent.guests.push(currentUserId);
    return (
        <button className="rsvp" className="join-button" onClick={() => updateEvent(newEvent)}>rsvp</button>
    );
  } else {
    let index = event.guests.indexOf(currentUserId);
    newEvent.guests.splice(index, 1);
    return (
        <button className="rsvp" className="unjoin-button" onClick={() => updateEvent(newEvent)}>skip</button>
    );
  }

};


export default RsvpButton;

//nb
//onClick={() => updateEvent(event)}
//this must be a callback because otherwise it will invoke automatically without clicking
//we want the clicking to call a func that invokes it
