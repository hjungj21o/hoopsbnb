import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import arenasReducer from './arenas_reducer';
import bookingsReducer from './bookings_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    arenas: arenasReducer,
    bookings: bookingsReducer,
});

export default entitiesReducer;