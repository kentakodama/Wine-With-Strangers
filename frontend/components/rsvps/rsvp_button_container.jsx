import { connect } from 'react-redux';

import RsvpButton from './rsvp_button';
import {updateEvent} from '../../actions/event_actions';

const mapStateToProps = (state, ownProps) => ({
  currentUserId: state.session.currentUser.id,
  event: ownProps.event
});

const mapDispatchToState = (dispatch) => ({
  updateEvent: (eventObj) => dispatch(updateEvent(eventObj))
});

export default connect(
  mapStateToProps,
  mapDispatchToState
)(RsvpButton);
