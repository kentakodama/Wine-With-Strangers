import { connect } from 'react-redux';
import { logout, login } from '../actions/session_actions';
import Greeting from './greeting';
//import some actions here


const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  demo: () => dispatch(login({email: 'demo', password: 'password'}))
});

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
