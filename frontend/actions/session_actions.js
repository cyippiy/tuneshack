import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USERS = "RECEIVE_USERS";

const receiveCurrentUser = user => {
  return {
  type: RECEIVE_CURRENT_USER,
  user
  }
}

const logoutCurrentUser = () => ({
  type:LOGOUT_CURRENT_USER,
})

export const receiveErrors = errors => {
  return ({
    type: RECEIVE_SESSION_ERRORS,
    errors
  })
};

const receiveUser = user => {
  return {
    type: RECEIVE_USER,
    user
  }
};

const receiveUsers = users => {
  return({
    type: RECEIVE_USERS,
    users
  })
};

export const login = user => dispatch =>{
  return APIUtil.login(user).then(user => dispatch(receiveCurrentUser(user)),
  err => dispatch(receiveErrors(err.responseJSON)))
};

export const signup = user => dispatch => {
  return APIUtil.signup(user).then(user => dispatch(receiveCurrentUser(user)),
  err => dispatch(receiveErrors(err.responseJSON)))
};

export const logout = () => dispatch => {
  return APIUtil.logout().then(user => dispatch(logoutCurrentUser()),
  err => dispatch(receiveErrors(err.responseJSON)))
};

export const fetchUser = id => dispatch => {
  return APIUtil.fetchUser(id).then(user => dispatch(receiveUser(user)),
  err => dispatch(receiveErrors(err.responseJSON)))
};
export const editUser = user => dispatch => {
  return APIUtil.editUser(user).then(user => dispatch(receiveUser(user)),
  err => dispatch(receiveErrors(err.responseJSON)))
};

export const fetchSearchUsers = search => dispatch => {
  return APIUtil.fetchSearchUsers(search).then(users => dispatch(receiveUsers(users)),
  err => dispatch(receiveErrors(err.responseJSON)))
}