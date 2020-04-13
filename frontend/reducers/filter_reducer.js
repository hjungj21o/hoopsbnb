import { UPDATE_FILTER } from '../actions/filter_actions';

const filterReducer = ( oldState = {}, action ) => {
    Object.freeze(oldState);

    switch (action.type) {
        case UPDATE_FILTER:
            const newFilter = {
                [action.filter]: action.value
            };

            return Object.assign({}, oldState, newFilter);
        default:
            return oldState;
    }
}

export default filterReducer;