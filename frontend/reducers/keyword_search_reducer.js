import { FETCH_KEYWORD, DELETE_KEYWORD } from '../actions/keyword_actions';

export default function keywordSearchReducer(state = null, action) {
    switch (action.type) {
        case FETCH_KEYWORD:
            return action.keyword
        case DELETE_KEYWORD:
            return null;
        default: 
            return state;
    }
}