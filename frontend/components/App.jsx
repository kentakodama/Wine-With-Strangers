
import React from 'react';
import GreetingContainer from './greeting_container';
import {Route, Switch} from 'react-router-dom';
import SignupFormContainer from './signup_form_container';
import LoginFormContainer from './login_form_container';
import AuthRoute from '../util/route_util';



const App = () => (
  <div>
      <header>
          <h1>Wine With Strangers</h1>
          <Route path="/" component={GreetingContainer} />
        </header>
        <Switch>
          <Route path="/signup" component={SignupFormContainer} />
          <Route path="/login" component={LoginFormContainer} />
        </Switch>
  </div>
);

export default App;
