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
import AlbumDetailsContainer from './album/album_container';
import AlbumIndexContainer from './album/album_index_container';
import Home from './home.jsx';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Footer from './footer_bar/footer_auth';

const App = () => {
  return(
    <div className="wrapper">
      <Switch>
        <ProtectedRoute exact path="/profile" component={UserEditProfileContainer} />
        <ProtectedRoute path="/artists/:id" component={UserProfileContainer} />
        <ProtectedRoute path="/albums/:id" component={AlbumDetailsContainer} />
        <ProtectedRoute path="/albums" component={AlbumIndexContainer} />
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <Route exact path="/" component={Home} />
      </Switch>
      <Footer />
    </div>
  )
};

export default App;
