export const createNewEvent = (event) => (
  $.ajax({
  	method: 'POST',
  	url: 'api/events',
    data: event }
  )
);
