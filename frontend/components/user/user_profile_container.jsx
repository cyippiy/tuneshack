import React from 'react';
import { connect } from 'react-redux';
import UserProfile from './user_profile';
import values from 'lodash/values';

import { logout, fetchUser } from '../../actions/session_actions';
import { fetchAlbumsUser, fetchAlbum } from '../../actions/album_actions';


const mapStateToProps = (state,ownProps) => {
  // debugger
  return ({
    user: state.entities.users[ownProps.match.params.id],
    id: ownProps.match.params.id,
    albums: state.entities.albums.albums})
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchUser: user => dispatch(fetchUser(user)),
  fetchAlbumsUser: albums => dispatch(fetchAlbumsUser(albums)),
  fetchAlbum: album => dispatch(fetchAlbum(album))
});

export default connect(mapStateToProps,mapDispatchToProps)(UserProfile);
