import { connect } from 'react-redux';
import Artist from './artist';
import { fetchUser } from '../../actions/session_actions';

const mapStateToProps = (state,ownProps) => {
    return {
        id: ownProps.id,
        artist: state.entities.users[ownProps.id]
    }
}

const mapDispatchToProps = dispatch => {
    return ({
        fetchUser: user => dispatch(fetchUser(user))
    })
}

export default connect(mapStateToProps,mapDispatchToProps)(Artist);