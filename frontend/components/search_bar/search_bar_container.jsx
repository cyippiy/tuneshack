import {connect} from 'react-redux';
import SearchBar from 'search_bar';
import { fetchSearchUsers } from '../../actions/session_actions';
import { fetchSearchAlbums } from '../../actions/album_actions';
import { fetchSearchSongs } from '../../actions/song_actions';

const mapStateToProps = state => {(

)};

const mapDispatchToProps = dispatch => ({
    searchUsers: search => dispatch(fetchSearchUsers(search)),
    searchAlbums: search => dispatch(fetchSearchAlbums(search)),
    searchSongs: search => dispatch(fetchSearchSongs(search)),

});

export default connect(mapStateToProps,mapDispatchToProps)(SearchBar);