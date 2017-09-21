
import {connect} from 'react-redux';
import { login, logout, signup } from '../actions/session_actions';
import SignupForm from './signup_form';

const mapStateToProps = (state, ownProps) => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.errors.session,
  formType: ownProps.location.pathname === login ? "login" : "signup"
});

//formtype above will be used in the presentation component and it will be interpolated into the rendering

const mapDispatchToProps = (dispatch, ownProps) => {
  return {signup: (user) => dispatch(signup(user))};
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
