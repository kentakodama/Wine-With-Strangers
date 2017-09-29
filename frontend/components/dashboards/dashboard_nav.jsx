

import React from 'react';
import {Link} from 'react-router-dom';

// import EventsIndexContainer from '../events/events_index_container';

const DashboardNav = () => {
  return (
    <div className="dashboard-nav">
      <div className="dashboard-links">
        <Link className="dashboard-link" to="/dashboard/past">Past Events</Link>
        <Link className="dashboard-link" to="/dashboard">Upcoming Events</Link>
        <Link className="dashboard-link" to="/dashboard/host">Hosted Events</Link>
      </div>
    </div>
  );

};

export default DashboardNav;
