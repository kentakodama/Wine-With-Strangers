import { connect } from 'react-redux';

import LocationsIndex from './locations_index';
import {requestAllLocations} from '../../actions/location_actions';

const mapStateToProps = (state) => ({
  locations: state.locations
});

const mapDispatchToState = (dispatch) => ({
  requestAllLocations: () => dispatch(requestAllLocations())
});

export default connect(
  mapStateToProps,
  mapDispatchToState
)(LocationsIndex);
