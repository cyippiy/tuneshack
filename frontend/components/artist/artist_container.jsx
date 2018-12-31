import { connect } from 'react-redux';
import Artist from './artist';
import { fetchUser } from "../../actions/session_actions";

const mapDispatchToProps = dispatch => {
    return ({
        fetchUser: user => dispatch(fetchUser(user));
    })
}

export default connect(_,mapDispatchToProps)(Artist);