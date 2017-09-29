






//this is not being rendered now



import React from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import UpcomingEventsContainer from './upcoming_events_container';
import HostedEventsContainer from './hosted_events_container';
import PastEventsContainer from './past_events_container';
import HostedEvents from './hosted_events';
import PastEvents from './past_events';
import DashboardNav from './dashboard_nav';
import {AuthRoute, ProtectedRoute} from '../../util/route_util';

const Dashboard = () => {
  return (
    <div>
      <Switch>
        <Route path="/dashboard/host" component={HostedEventsContainer} />
        <Route path="/dashboard/past" component={PastEventsContainer} />
        <Route path="/dashboard/upcoming" component={UpcomingEventsContainer} />
      </Switch>
    </div>
  );

};

export default Dashboard;
