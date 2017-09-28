import React from 'react';
import merge from 'lodash/merge';
//import {updateEvent} from '../../actions/event_actions';


const RsvpButton = ({currentUserId, event, updateEvent}) => {

  let newEvent = merge({}, event);
  if (event.guests.indexOf(currentUserId) === -1) {
    newEvent.guests.push(currentUserId);
    return (
      <div className="rsvp">
        <p className="space">-</p>
        <button className="join-button" onClick={() => updateEvent(newEvent)}>rsvp</button>
      </div>
    );
  } else {
    let index = event.guests.indexOf(currentUserId);
    newEvent.guests.splice(index, 1);
    return (
      <div className="rsvp" >
        <p className="attendance-status">YOU'RE GOING!</p>
        <button className="unjoin-button" onClick={() => updateEvent(newEvent)}>skip</button>
      </div>
    );
  }

};


export default RsvpButton;

//nb
//onClick={() => updateEvent(event)}
//this must be a callback because otherwise it will invoke automatically without clicking
//we want the clicking to call a func that invokes it
