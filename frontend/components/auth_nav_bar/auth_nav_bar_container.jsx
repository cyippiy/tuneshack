import React from 'react';
import { connect } from 'react-redux';
import AuthNavBar from './nav_bar';

import { logout, fetchUser } from '../../actions/session_actions';

const mapStateToProps = state => {
  return({
    currentUser: state.entities.users[state.session.id],
    id: state.session.id
  });
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchUser: user => dispatch(fetchUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthNavBar);
