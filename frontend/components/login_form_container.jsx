
import {connect} from 'react-redux';
import { login, logout, signup } from '../actions/session_actions';
import LoginForm from './login_form';

const mapStateToProps = (state, ownProps) => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.errors,
  formType: ownProps.location.pathname === login ? "login" : "signup"
});

//formtype above will be used in the presentation component and it will be interpolated into the rendering

const mapDispatchToProps = (dispatch, ownProps) => {

  let formType;
  if (ownProps.location.pathname.slice(1) === "login") {
    formType = login;
  } else {
    formType = signup;
  }
  return {formType: (user) => dispatch(formType(user))};
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
