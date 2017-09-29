import * as _ from 'lodash';

//lodash methods, location id in params is a string not a num be careful!

export const selectLocationEvents = (events, locationId) => {
  let eventsArray =  _.filter(
    _.orderBy(_.values(events), ['time']), {location_id: parseInt(locationId)}
  );
  return eventsArray.sort((a, b) => (
    new Date(a.date) - new Date(b.date)
  ));
};

export const selectUpcomingUserEvents = (state, userId) => {
  let userEvents = selectUserEvents(state.events, userId);
  let filteredArr = userEvents.filter((eventObj) => (isUpcoming(eventObj.date)));
  return filteredArr;
};

export const selectPastUserEvents = (state, userId) => {
  let userEvents = selectUserEvents(state.events, userId);
  let filteredArr = userEvents.filter((eventObj) => (isPast(eventObj.date)));
  return filteredArr;
};

export const selectHostedEvents = (state, userId) => {
  let userEvents = selectUserEvents(state.events, userId);
  let upcomingArr = userEvents.filter((eventObj) => (isUpcoming(eventObj.date)));
  let hostedEvents = upcomingArr.filter((eventObj) => (eventObj.host_id === parseInt(userId)));
  return hostedEvents
};

export const sortEvents = (state) => {
  let eventsArray = [];
  Object.keys(state.events).forEach((eventId) => {
    eventsArray.push(state.events[eventId]);
  });
  return eventsArray.sort((a, b) => (
    new Date(a.date) - new Date(b.date)
  ));
};

const isUpcoming = (timeString) => (
  Date.now() < Date.parse(timeString)
);

const isPast = (timeString) => (
  Date.now() > Date.parse(timeString)
);

export const selectUserEvents = (events, userId) => {
  let eventsArray = [];
  Object.keys(events).forEach((eventId) => {
    if (events[eventId].guests.indexOf(parseInt(userId)) !== -1) {
      eventsArray.push(events[eventId]);
    }
  });
  return eventsArray.sort((a, b) => (
    new Date(a.date) - new Date(b.date)
  ));
};
