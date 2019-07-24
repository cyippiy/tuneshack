import {connect} from 'react-redux';
import SearchBar from './search_bar';
import { fetchSearchResults } from '../../actions/search_actions';



const mapDispatchToProps = dispatch => {
    return ({
        searchResults: search => dispatch(fetchSearchResults(search))
    })
};

export default connect(null,mapDispatchToProps)(SearchBar);