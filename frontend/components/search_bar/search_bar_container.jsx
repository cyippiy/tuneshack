import {connect} from 'react-redux';
import SearchBar from './search_bar';
import { fetchSearchUsers } from '../../actions/session_actions';
import { fetchSearchAlbums } from '../../actions/album_actions';
import { fetchSearchSongs } from '../../actions/song_actions';
import { fetchSearchResults } from '../../actions/search_actions';
// const mapStateToProps = state => ({

// });

const mapDispatchToProps = dispatch => {
    return ({
        // searchUsers: user => dispatch(fetchSearchUsers(user)),
        // searchAlbums: albums => dispatch(fetchSearchAlbums(albums)),
        // searchSongs: songs => dispatch(fetchSearchSongs(songs))
        searchResults: search => dispatch(fetchSearchResults(search))
    })
};

export default connect(null,mapDispatchToProps)(SearchBar);