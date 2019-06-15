import { connect } from 'react-redux';
import Artist from './artist';
import { fetchSearchUsers } from '../../actions/session_actions';
import { fetchSearchAlbums } from '../../actions/album_actions';
import { fetchSearchSongs } from '../../actions/song_actions';

const mapStateToProps = (state,ownProps) => {
    return {
        // id: ownProps.match.params.id,
        // artist: state.entities.users[ownProps.id]
    }
}

const mapDispatchToProps = dispatch => {
    return ({
        searchUsers: user => dispatch(fetchSearchUsers(user)),
        searchAlbums: albums => dispatch(fetchSearchAlbums(albums)),
        searchSongs: songs => dispatch(fetchSearchSongs(songs))
    })
}

export default connect(null,null)(Artist);