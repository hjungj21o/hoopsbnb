import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import arenasReducer from './arenas_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    arenas: arenasReducer
});

export default entitiesReducer;