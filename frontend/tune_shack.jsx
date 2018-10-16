import React from 'react';
import ReactDOM from 'react-dom';
import {signup, login, logout, editUser, fetchUser} from './actions/session_actions';
import {fetchAlbums, fetchAlbumsUser, fetchAlbum} from './actions/album_actions';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
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
  window.fetchAlbums = fetchAlbums;
  window.fetchAlbumsUser = fetchAlbumsUser;
  window.fetchAlbum = fetchAlbum;
  window.editUser = editUser;
  window.fetchUser = fetchUser;


  window.getState = store.getState;
  window.dispatch = store.dispatch;

  // TESTING ENDS
  ReactDOM.render(<Root store={store} />, root);
});
