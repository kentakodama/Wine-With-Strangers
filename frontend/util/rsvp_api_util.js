

export const postRsvp = (rsvp) => (
  $.ajax({
    	method: 'POST',
    	url: 'api/rsvps',
      data: {rsvp}
  })
);

export const deleteRsvp = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `api/rsvp/${id}`
  })
);

//figure out how to pass
