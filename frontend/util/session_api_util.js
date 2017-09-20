
//user must be passed in via arg!
//wrap userd in {}
// user wrap because this is analogous to params and params is an object

export const signup = (user) => (
  $.ajax({
  	method: 'POST',
  	url: '/api/users',
  	data: {user}}
  )
);

export const login = (user) => (
  $.ajax({
  	method: 'POST',
  	url: '/api/session',
  	data: {user}}
  )
);

export const logout = () => (
  $.ajax({
  	method: 'DELETE',
  	url: '/api/session'}
  )
);
