
import React from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import UpcomingEventsContainer from './upcoming_events_container';
import HostedEvents from './hosted_events';
import PastEvents from './past_events';
import DashboardNav from './dashboard_nav';

// import EventsIndexContainer from '../events/events_index_container';

const Dashboard = () => {
  return (
    <div>
      <DashboardNav />
      <Switch>
        <Route exact path="/dashboard" component={UpcomingEventsContainer} />
      </Switch>
    </div>
  );

};

export default Dashboard;

// <Route path="/dashboard/host" component={HostedEvents} />
// <Route path="/dashboard/past" component={PastEvents} />
