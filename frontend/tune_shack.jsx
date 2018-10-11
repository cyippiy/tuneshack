import React from 'react';
import ReactDOM from 'react-dom';
import {signup, login, logout} from './util/session_api_util';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  let store;
  if (window.currentUser) {
    const preloadedState = {
      session: { id: window.currentUser.id },
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  // TESTING STARTS

  window.login = login;
  window.signup = signup;
  window.logout = logout;
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  // TESTING ENDS
  ReactDOM.render(<Root store={store} />, root);
});
