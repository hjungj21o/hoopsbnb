import { connect } from 'react-redux';
import { arenasSearch } from '../../actions/arena_actions';
import SearchBar from './searchbar';
import { withRouter } from 'react-router-dom';


const mdp = dispatch => {
    return ({
        arenasSearch: (keyword) => dispatch(arenasSearch(keyword))
    })
}

export default withRouter(connect(null, mdp)(SearchBar));
