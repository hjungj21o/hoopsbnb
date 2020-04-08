import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_ERRORS';

const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user
});

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
});

const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

export const signup = userForm => dispatch => (
    SessionApiUtil.signup(userForm)
        .then((user) => dispatch(receiveCurrentUser(user)),
        (error) => dispatch(receiveErrors(error.responseJSON)))
);

export const login = userForm => dispatch => (
    SessionApiUtil.login(userForm)
        .then((user) => dispatch(receiveCurrentUser(user)),
        (error) => dispatch(receiveErrors(error.responseJSON)))
);

export const logout = () => dispatch => (
    SessionApiUtil.logout()
        .then(() => dispatch(logoutCurrentUser()),
        (error) => dispatch(receiveErrors(error.responseJSON)))
);
