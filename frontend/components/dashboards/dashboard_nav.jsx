

import React from 'react';
import {Link} from 'react-router-dom';

// import EventsIndexContainer from '../events/events_index_container';

const DashboardNav = () => {
  return (
    <div className="dashboard-nav">
      <div className="dashboard-links">
        <Link to="/dashboard">Upcoming Events</Link>
        <Link to="/dashboard/host">Hosted Events</Link>
        <Link to="/dashboard/past">Past Events</Link>
      </div>
    </div>
  );

};

export default DashboardNav;
