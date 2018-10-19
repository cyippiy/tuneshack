import React from 'react';
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
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import UserProfileContainer from './user/user_profile_container';


class Home extends React.Component{
  render(){
    return (
      <div>
        <header>
          <NavBarContainer />
        </header>
        <section className="unauth-container">
          <section className="splash-boxes">
            <section className="splash-box-left">
              <Link className="box-left" to="/albums/2">
                <div className="caption">
                  <h1>New Nujabez!</h1>
                </div>
              </Link>
            </section>
            <section className="splash-box-right">
              <Link className="box-right1" to="/albums/3">
                <div className="caption">
                  <h1>Wave Music with the goods</h1>
                </div>
              </Link>
              <Link className="box-right2" to="/albums/4">
                <div className="caption">
                <h1>MARS BRUNO holding it down</h1>
                </div>
              </Link>
              <Link className="box-right3" to="/albums/5">
                <div className="caption">
                <h1> Elevven was just featured on ASOT</h1>
                </div>
              </Link>
            </section>
          </section>
        </section>
      </div>
    );
  }
}

export default Home;
