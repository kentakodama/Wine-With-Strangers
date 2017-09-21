import * as APIUtil from '../util/session_api_util';
//this above is just importing all ajax calls

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const SIGNUP = 'SIGNUP';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const signup = (user) => (dispatch) => {
  return APIUtil.signup(user)
  .then(
    currentUser => (dispatch(receiveCurrentUser(currentUser))),
    errors => dispatch(receiveSessionErrors(errors.responseJSON)) //strip away everything besides array of errors
  );
};

// response can be one of two things. we capture success and failure above

export const login = (user) => (dispatch) => {
  return APIUtil.login(user)
  .then(
    currentUser => (dispatch(receiveCurrentUser(currentUser))),
    errors => dispatch(receiveSessionErrors(errors.responseJSON))
  );
};

export const logout = () => (dispatch) => {
  return APIUtil.logout().then(currentUser => {
    dispatch(receiveCurrentUser(null));
  });
};

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  user: currentUser
});

export const receiveSessionErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors: errors
});
