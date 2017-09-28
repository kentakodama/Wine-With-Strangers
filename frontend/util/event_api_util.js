export const createNewEvent = (event) => (
  $.ajax({
    	method: 'POST',
    	url: 'api/events',
      data: {event}
  })
);

export const patchEvent = (event) => (
  $.ajax({
    method: 'PATCH',
    url: `api/events/${event.id}`,
    data: {event}
  })
);
