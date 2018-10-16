import React from 'react';
import { connect } from 'react-redux';
import UserProfile from './user_profile';

import { logout, fetchUser } from '../../actions/session_actions';
import { fetchAlbumsUser, fetchAlbum } from '../../actions/album_actions';

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.id],
  id: state.session.id
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchUser: user => dispatch(fetchUser(user)),
  fetchAlbumsUser: albums => dispatch(fetchAlbumsUser(albums)),
  fetchAlbum: album => dispatch(fetchAlbum(album))
});

export default connect(mapStateToProps,mapDispatchToProps)(UserProfile);
