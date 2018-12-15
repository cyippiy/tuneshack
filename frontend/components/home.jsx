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
    return <div>
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
                <div className="overlay">
                  <div className="caption">
                    <h1>Elevven was just featured on ASOT</h1>
                  </div>
                </div>
              </Link>
            </section>
          </section>
          <section className="splash-icons">
            <div className="splash-fans">
              <h1>Fans</h1>
              <img src="https://bandcamp.com/img/homepage_2015/signups-fans-icon@3x.png" />
              <h1>
                Get instant streaming of your purchases, follow your
                favorite artists, keep a wishlist, showcase your collection,
                and explore the music of like-minded fans.
              </h1>
            </div>
            <div className="splash-artists">
              <h1>Artists</h1>
            <img src="https://bandcamp.com/img/homepage_2015/signups-artists-icon@3x.png" />
              <h1>
                Sell directly to your fans with total control over your
                music and pricing. Easy access to your customers’ data,
                real-time stats, music chart reporting, and more.
              </h1>
            </div>
            <div className="splash-labels">
              <h1>Labels</h1>
            <img src="https://bandcamp.com/img/homepage_2015/signups-labels-icon@3x.png" />
              <h1>
                Unified accounting and stats across all your artists, a
                single fulfillment interface for all your merch, direct
                payments on a per release basis, and a whole lot more.
              </h1>
            </div>
          </section>
          <section className="footer" />
        </section>
      </div>;
  }
}

export default Home;
