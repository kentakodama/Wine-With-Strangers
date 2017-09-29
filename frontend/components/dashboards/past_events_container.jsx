import {connect} from 'react-redux';

import PastEvents from './past_events';
import { selectUpcomingUserEvents, selectPastUserEvents, selectHostedEvents } from '../../reducers/selectors';

import { requestUserEvents } from '../../actions/event_actions';

const mapStateToProps = (state) => ({
  pastEvents: selectPastUserEvents(state, state.session.currentUser.id),
  upcomingEvents: selectUpcomingUserEvents(state, state.session.currentUser.id),
  hostedEvents: selectHostedEvents(state, state.session.currentUser.id)
});

const mapDispatchToProps = (dispatch) => ({
  requestUserEvents: () => dispatch(requestUserEvents())
});

export default connect(mapStateToProps, mapDispatchToProps)(PastEvents);
