import {
    RECEIVE_CURRENT_USER,
    LOGOUT_CURRENT_USER
} from '../actions/session_actions';

let _nullState = { id: null }

const sessionReducer = (oldState = _nullState, action) => {
    Object.freeze(oldState);
    // debugger;
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, {id: action.user.id});
        case LOGOUT_CURRENT_USER:
            return Object.assign({}, _nullState);
        default:
            return oldState;
    }
};

export default sessionReducer;