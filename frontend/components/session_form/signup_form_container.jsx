import React from 'react';
import SessionForm from './session_form';
import { connect } from 'react-redux';
import { signup,receiveErrors } from '../../actions/session_actions';
import { Link } from 'react-router-dom';

const mapStateToProps = (state,ownProps) => ({
  errors: state.errors.session,
  formType: "signup",
  navLink: <Link to="/login">log in instead</Link>,
});

const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(signup(user)),
  clearError: () => dispatch(receiveErrors([]))
});

export default connect(mapStateToProps,mapDispatchToProps)(SessionForm);
