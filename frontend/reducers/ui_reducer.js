import { combineReducers } from 'redux';
import  filters from './filter_reducer';
import modal from './modal_reducer';

const uiReducer = combineReducers({
    modal,
    filters
});

export default uiReducer;
