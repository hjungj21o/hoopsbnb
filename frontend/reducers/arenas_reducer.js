import { RECEIVE_ARENAS, RECEIVE_ARENA } from '../actions/arena_actions';

const arenasReducer = ( oldState = {}, action ) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_ARENAS:
            return action.arenas;
        case RECEIVE_ARENA:
            return Object.assign({}, oldState, {[action.arena.id]: action.arena});
        default: 
            return oldState;
    }
}

export default arenasReducer;