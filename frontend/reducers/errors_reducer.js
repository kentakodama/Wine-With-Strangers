
import { combineReducers } from 'redux';

import SessionErrorsReducer from './session_errors_reducer';
import EventErrorsReducer from './event_errors_reducer';

const ErrorsReducer = combineReducers({
  session: SessionErrorsReducer,
  events: EventErrorsReducer,
});

export default ErrorsReducer;
