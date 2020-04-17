import { RECEIVE_ARENAS, RECEIVE_ARENA } from '../actions/arena_actions';
import { RECEIVE_BOOKINGS } from '../actions/booking_actions';

const arenasReducer = ( oldState = {}, action ) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_ARENAS:
            return Object.assign({}, action.arenas);
        case RECEIVE_ARENA:
            return Object.assign({}, oldState, {[action.arena.id]: action.arena});
        case RECEIVE_BOOKINGS:
            if (!action.arenas) action.arenas = {};
            return action.arenas
        default: 
            return oldState;
    }
}

export default arenasReducer;