import {connect} from 'react-redux';
import SearchBar from './search_bar';
import { fetchSearchUsers } from '../../actions/session_actions';
import { fetchSearchAlbums } from '../../actions/album_actions';
import { fetchSearchSongs } from '../../actions/song_actions';

// const mapStateToProps = state => ({

// });

const mapDispatchToProps = dispatch => {
    return ({
        searchUsers: user => dispatch(fetchSearchUsers(user)),
        searchAlbums: albums => dispatch(fetchSearchAlbums(albums)),
        searchSongs: songs => dispatch(fetchSearchSongs(songs))
    })
};

export default connect(null,mapDispatchToProps)(SearchBar);