import React from 'react';
import {Link} from 'react-router-dom';

import EventsIndexContainer from '../events/events_index_container';

const LocationPage = (props) => {
  console.log(props);
  return (
    <div>
      <EventsIndexContainer />
      <Link to="/locations/:locationId/new"></Link>
    </div>
  );

};

export default LocationPage;
