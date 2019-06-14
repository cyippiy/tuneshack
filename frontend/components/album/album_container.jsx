import React from 'react';
import { connect } from 'react-redux';
import AlbumDetails from './album';
import values from 'lodash/values';
import { fetchAlbum } from '../../actions/album_actions';
import { fetchUser } from '../../actions/session_actions';
import { fetchSongsAlbum } from '../../actions/song_actions';

const mapStateToProps = (state,ownProps) => {
  return { 
    album: state.entities.albums[ownProps.match.params.id],
    id: ownProps.match.params.id, 
    songs: state.entities.songs.songs,
  }
}

const mapDispatchToProps = dispatch => {
  return ({
    fetchAlbum: album => dispatch(fetchAlbum(album)),
    fetchSongsAlbum: songs => dispatch(fetchSongsAlbum(songs)),
    fetchUser: user => dispatch(fetchUser(user))
  })
}
export default connect(mapStateToProps,mapDispatchToProps)(AlbumDetails)
