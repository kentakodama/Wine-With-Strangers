
import React from 'react';
import GreetingContainer from './greeting_container';
import {Link, Route, Switch} from 'react-router-dom';
import SignupFormContainer from './signup_form_container';
import LoginFormContainer from './login_form_container';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import LocationsPage from './locations/locations_page';
import About from './about';
import MainPage from './main_page';
import Footer from './footer';

// <Route path={`/locations/${location.id}`} component={LocationShowContainer} />

const App = () => (
  <div>
    <header className='nav-bar'>
      <Link to="/">Wine With Strangers</Link>
      <Route path="/" component={GreetingContainer} />
    </header>
    <div className="main-view">
      <Switch>
        <Route exact path="/" component={MainPage} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
        <Route path="/login" component={LoginFormContainer} />
        <Route path="/locations" component={LocationsPage} />
        <Route path="/about" component={About} />
      </Switch>
    </div>
    <footer>
      <Route path="/" component={Footer} />
    </footer>
  </div>
);

export default App;
