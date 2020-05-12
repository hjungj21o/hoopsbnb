import { connect } from 'react-redux';
import { fetchArenasOnSearchResults } from '../../actions/arena_actions';
import SearchBar from './searchbar';
import { withRouter } from 'react-router-dom';


const mdp = dispatch => {
    debugger;
    return ({
        fetchKeyword: (keyword => dispatch(fetchArenasOnSearchResults(keyword)))
    })
}

export default withRouter(connect(null, mdp)(SearchBar));
