import { connect } from 'react-redux';
import Search from './search';
import { fetchArenas } from '../../actions/arena_actions';
import { withRouter } from 'react-router-dom';

const msp = state => {
    return {
        arenas: Object.values(state.entities.arenas)
    };
};

const mdp = dispatch => {
    return {
        fetchArenas: () => dispatch(fetchArenas())
    };
};

export default connect(msp, mdp)(Search);