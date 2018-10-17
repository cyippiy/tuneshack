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
import UserProfileContainer from './user/user_profile_container';
import UserEditProfileContainer from './user/user_edit_profile_container';
import Home from './home.jsx';
import { AuthRoute, ProtectedRoute } from '../util/route_util';


const App = () => {
  return(
    <div>
      <Switch>
        <ProtectedRoute exact path="/profile" component={UserEditProfileContainer} />
        <Route path="/artists/:id" component={UserProfileContainer} />
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  )
};

export default App;
