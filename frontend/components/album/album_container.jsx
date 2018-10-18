import React from 'react';
import { connect } from 'react-redux';
import AlbumDetails from './album'
import values from 'lodash/values';
import { fetchAlbum } from '../../actions/album_actions';
import { fetchSongs } from '../../actions/song_actions';

const mapStateToProps = (state,ownProps) => {
  return ({
    album: state.entities.albums[ownProps.match.params.id],
    id: ownProps.match.params.id,
    songs: state.entities.songs.songs
  })
}

const mapDispatchToProps = dispatch => {
  return ({
    fetchAlbum: album => dispatch(fetchAlbum(album)),
    fetchSongs: songs => dispatch(fetchSongs(songs))
  })
}
export default connect(mapStateToProps,mapDispatchToProps)(AlbumDetails)
