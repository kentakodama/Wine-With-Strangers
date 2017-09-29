export const getUserEvents= () => (
  $.ajax({
  	method: 'GET',
  	url: 'api/user_events'
  })
);
