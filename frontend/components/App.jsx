
import React from 'react';
import GreetingContainer from './greeting_container';
import {Link, Route, Switch} from 'react-router-dom';
import SignupFormContainer from './signup_form_container';
import LoginFormContainer from './login_form_container';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import AllLocationsPage from './locations/locations_page';
import LocationPage from './locations/location_page';
import About from './about';
import MainPage from './main_page';
import Footer from './footer';
import NewEventForm from './events/new_event_form';
import Dashboard from './dashboards/dashboard';
import HostedEventsContainer from './dashboards/hosted_events_container';
import PastEventsContainer from './dashboards/past_events_container';
import UpcomingEventsContainer from './dashboards/upcoming_events_container';

const App = () => (
  <div>
    <header className='nav-bar'>
      <div className="logo">
        <Link to="/dashboard/upcoming">
          <img src="https://res.cloudinary.com/dql6mlrow/image/upload/v1506683563/Screen_Shot_2017-09-29_at_4.11.56_AM_p8eoyp.png"/>
        </Link>
      </div>
      <Route path="/" component={GreetingContainer} />
    </header>
    <div className="main-view">
      <Switch>
        <AuthRoute path="/signup" component={SignupFormContainer} />
        <AuthRoute path="/login" component={LoginFormContainer} />
        <ProtectedRoute path="/locations/:locationId/new" component={NewEventForm} />
        <ProtectedRoute path="/locations/:locationId" component={LocationPage} />
        <Route path="/locations" component={AllLocationsPage} />
        <Route path="/about" component={About} />
          <ProtectedRoute path="/dashboard/host" component={HostedEventsContainer} />
          <ProtectedRoute path="/dashboard/past" component={PastEventsContainer} />
          <ProtectedRoute path="/dashboard/upcoming" component={UpcomingEventsContainer} />
        <AuthRoute path="/" component={MainPage} />
      </Switch>
    </div>
    <footer>
      <Route path="/" component={Footer} />
    </footer>
  </div>
);

export default App;

// <Route path="/dashboard/upcoming" component={Dashboard} />
