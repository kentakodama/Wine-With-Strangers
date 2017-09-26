export const getAllLocations = () => (
  $.ajax({
  	method: 'GET',
  	url: 'api/locations'}
  )
);

export const getLocation = (id) => (
  $.ajax({
  	method: 'GET',
  	url: `api/locations/${id}`}
  )
);
