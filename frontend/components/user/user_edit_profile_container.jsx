import React from 'react';
import { connect } from 'react-redux';
import UserEditProfile from './user_edit_profile';
import values from 'lodash/values';

import { logout, fetchUser, editUser } from '../../actions/session_actions';
import { fetchAlbumsUser, fetchAlbum } from '../../actions/album_actions';


const mapStateToProps = (state) => ({
  currentUser: state.entities.users[state.session.id],
  id: state.session.id,
  albums: state.entities.albums.albums
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchUser: user => dispatch(fetchUser(user)),
  fetchAlbumsUser: albums => dispatch(fetchAlbumsUser(albums)),
  fetchAlbum: album => dispatch(fetchAlbum(album)),
  editUser: user => dispatch(editUser(user))
});

export default connect(mapStateToProps,mapDispatchToProps)(UserEditProfile);
