import React from 'react';
import { connect } from 'react-redux';
import NavBar from './nav_bar';

import { logout, fetchUser } from '../../actions/session_actions';

const mapStateToProps = state => {
  // currentUser: {
  //   id: state.session.id,
  //   email: state.session.email
  // }
  return({
    currentUser: state.entities.users[state.session.id],
    id: state.session.id
  });
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchUser: user => dispatch(fetchUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
