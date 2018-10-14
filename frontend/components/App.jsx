import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import NavBarContainer from './nav_bar/nav_bar_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import Home from './home.jsx'
import { AuthRoute } from '../util/route_util';


const App = () => {
  return(
    <div>
        <Home />
        <Switch>
          <Route expact path="/" component={Home} />
        </Switch>
    </div>
  )
};

export default App;
