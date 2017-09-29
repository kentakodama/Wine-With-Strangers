
import React from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import UpcomingEventsContainer from './upcoming_events_container';
import HostedEventsContainer from './hosted_events_container';
import PastEventsContainer from './past_events_container';
import HostedEvents from './hosted_events';
import PastEvents from './past_events';
import DashboardNav from './dashboard_nav';

// import EventsIndexContainer from '../events/events_index_container';

const Dashboard = () => {
  return (
    <div>
      <DashboardNav />
      <Switch>
        <Route path="/dashboard/host" component={HostedEventsContainer} />
        <Route path="/dashboard/past" component={PastEventsContainer} />
        <Route exact path="/dashboard" component={UpcomingEventsContainer} />
      </Switch>
    </div>
  );

};

export default Dashboard;
