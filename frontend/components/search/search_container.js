import { connect } from 'react-redux';
import Search from './search';
import { fetchArenas } from '../../actions/arena_actions';
import { withRouter } from 'react-router-dom';
import { updateBounds } from '../../actions/filter_actions';

const msp = state => {
    return {
        arenas: Object.values(state.entities.arenas)
    };
};

const mdp = dispatch => {
    return {
        fetchArenas: () => dispatch(fetchArenas()),
        updateBounds: bounds => dispatch(updateBounds(bounds))
    };
};

export default connect(msp, mdp)(Search);