import { combineReducers } from 'redux';
import  filters from './filter_reducer';
import modal from './modal_reducer';
import keyword from './keyword_search_reducer'

const uiReducer = combineReducers({
    modal,
    filters,
    keyword
});

export default uiReducer;
