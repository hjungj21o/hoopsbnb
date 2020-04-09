import { connect } from 'react-redux';
import ArenaShow from './arena_index';
import { fetchArena } from '../../actions/arena_actions';

const msp = state => {
    return ({
        [state.arena.id]: state.arena
    });
};

const mdp = dispatch => {
    return ({
        fetchUser: arenaId => dispatch(fetchArena(arenaId))
    });
}

export default connect(msp, mdp)(ArenaShow);