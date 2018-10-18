import React from 'react';
import { connect } from 'react-redux';
import AlbumsIndex from './album_index'
import values from 'lodash/values';
import { fetchAlbums } from '../../actions/album_actions';

const mapStateToProps = (state,ownProps) => {
  return ({
    albums: state.entities.albums,
  })
}

const mapDispatchToProps = dispatch => {
  return ({
    fetchAlbums: albums => dispatch(fetchAlbums(albums)),
  })
}
export default connect(mapStateToProps,mapDispatchToProps)(AlbumsIndex)
