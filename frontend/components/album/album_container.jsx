import React from 'react';
import { connect } from 'react-redux';
import AlbumDetails from './album'
import values from 'lodash/values';
import { fetchAlbum } from '../../actions/album_actions';

const mapStateToProps = (state,ownProps) => {
  return ({
    album: state.entities.albums,
    id: NULL
  })
}

const mapDispatchToProps = dispatch => {
  return ({
    fetchAlbum: album => dispatch(fetchAlbum(album))
  })
}
export default connect(mapStateToProps,mapDispatchToProps)(AlbumDetails)
