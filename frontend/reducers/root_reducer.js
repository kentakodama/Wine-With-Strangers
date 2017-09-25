import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import ErrorsReducer from './errors_reducer';
import LocationsReducer from './locations_reducer';
import EventsReducer from './events_reducer';


const RootReducer = combineReducers({
  session: SessionReducer,
  errors: ErrorsReducer,
  locations: LocationsReducer,
  events: EventsReducer
});

export default RootReducer;
