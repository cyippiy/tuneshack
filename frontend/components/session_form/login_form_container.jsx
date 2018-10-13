import React from 'react';
import SessionForm from './session_form';
import { connect } from 'react-redux';
import { login, receiveErrors } from '../../actions/session_actions'
import { Link } from 'react-router-dom';

const mapStateToProps = (state,ownProps) => ({
  errors: state.errors.session,
  formType: "login",
  navLink: <Link to="/signup">sign up instead</Link>,
});

const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(login(user)),
  clearError: () => dispatch(receiveErrors([]))
});

export default connect(mapStateToProps,mapDispatchToProps)(SessionForm);
