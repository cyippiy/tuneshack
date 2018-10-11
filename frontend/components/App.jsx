import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import NavBarContainer from './nav_bar/nav_bar_container'

const App = () => (
  <div>
    <header>
      <Link to="/" className="header-link">
      <h1>TuneShack</h1>
      </Link>
      <NavBarContainer />
    </header>
  </div>
);

export default App;
