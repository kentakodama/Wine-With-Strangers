
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

// <Route path={`/locations/${location.id}`} component={LocationShowContainer} />

const App = () => (
  <div>
    <header className='nav-bar'>
      <Link to="/">
        Wine with Strangers
      </Link>
      <Route path="/" component={GreetingContainer} />
    </header>
    <div className="main-view">
      <Switch>
        <AuthRoute path="/signup" component={SignupFormContainer} />
        <AuthRoute path="/login" component={LoginFormContainer} />
        <ProtectedRoute path="/dashboard" component={Dashboard} />
        <Route path="/locations/:locationId/new" component={NewEventForm} />
        <Route path="/locations/:locationId" component={LocationPage} />
        <Route path="/locations" component={AllLocationsPage} />
        <Route path="/about" component={About} />
        <AuthRoute exact path="/" component={MainPage} />
        <ProtectedRoute path="/" component={Dashboard} />
      </Switch>
    </div>
    <footer>
      <Route path="/" component={Footer} />
    </footer>
  </div>
);

export default App;
