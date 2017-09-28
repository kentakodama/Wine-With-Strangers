import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import EventsIndex from './events_index';
import { selectLocationEvents } from '../../reducers/selectors';
import * as _ from 'lodash';
import {createNewEvent} from '../../actions/event_actions';


import { requestLocation } from '../../actions/location_actions';



const mapStateToProps = (state, ownProps) => ({
  events: selectLocationEvents(state.events, ownProps.match.params.locationId),
  city: state.locations[ownProps.match.params.locationId]
});

//provider(isak) gives passes the url to child components,
//when we map State to Props, we can access the url through the second arg, ownProps

//locationId var is defined on the Route


const mapDispatchToProps = (dispatch) => ({
  requestLocation: id => dispatch(requestLocation(id)),
  createNewEvent: (state) => dispatch(createNewEvent(state))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EventsIndex));
