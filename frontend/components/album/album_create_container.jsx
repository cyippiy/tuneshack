import React from 'react';
import { connect } from 'react-redux';
import AlbumCreate from './album_create';
import values from 'lodash/values';
import { createAlbum } from '../../actions/album_actions';

const mapStateToProps = (state, ownProps) => {
    return ({
        user: state.session.id,
    })
}

const mapDispatchToProps = dispatch => {
    return ({
        createAlbum: (album, id) => dispatch(createAlbum(album, id))
    })
}
export default connect(mapStateToProps, mapDispatchToProps)(AlbumCreate)
