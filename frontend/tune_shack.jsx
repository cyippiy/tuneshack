import React from 'react';
import ReactDOM from 'react-dom';
import {signup, login, logout, editUser, fetchUser, fetchSearchUsers} from './actions/session_actions';
import {fetchAlbums, fetchAlbumsUser, fetchAlbum, fetchSearchAlbums} from './actions/album_actions';
import {fetchSongs, fetchSongsAlbum, fetchSong, fetchSearchSongs} from './actions/song_actions';
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
  window.fetchSongs = fetchSongs;
  window.fetchSongsAlbum = fetchSongsAlbum;
  window.fetchSong = fetchSong;
  window.editUser = editUser;
  window.fetchUser = fetchUser;
  window.fetchSearchSongs = fetchSearchSongs;
  window.fetchSearchUsers = fetchSearchUsers;
  window.fetchSearchAlbums = fetchSearchAlbums;

  window.getState = store.getState;
  window.dispatch = store.dispatch;

  // TESTING ENDS
  ReactDOM.render(<Root store={store} />, root);
});
