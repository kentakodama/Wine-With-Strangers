
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
import DashboardIntro from './dashboards/dashboard_intro';

// <Route path={`/locations/${location.id}`} component={LocationShowContainer} />

const App = () => (
  <div>
    <header className='nav-bar'>
      <div className="logo">
        <Link to="/">
          <img src="https://res.cloudinary.com/dql6mlrow/image/upload/v1506683563/Screen_Shot_2017-09-29_at_4.11.56_AM_p8eoyp.png"/>
        </Link>
      </div>
      <Route path="/" component={GreetingContainer} />
    </header>
    <div className="main-view">
      <Switch>
        <AuthRoute path="/signup" component={SignupFormContainer} />
        <AuthRoute path="/login" component={LoginFormContainer} />
        <Route path="/locations/:locationId/new" component={NewEventForm} />
        <Route path="/locations/:locationId" component={LocationPage} />
        <Route path="/locations" component={AllLocationsPage} />
        <Route path="/about" component={About} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/" component={MainPage} />
      </Switch>
    </div>
    <footer>
      <Route path="/" component={Footer} />
    </footer>
  </div>
);

export default App;
