import { connect } from 'react-redux';
import ArenaShow from './arena_show';
import { fetchArena } from '../../actions/arena_actions';

const msp = (state, ownProps) => {
    return ({
        arena: state.entities.arenas[ownProps.match.params.arenaId]
    });
};

const mdp = dispatch => {
    return ({
        fetchArena: arenaId => dispatch(fetchArena(arenaId))
    });
}

export default connect(msp, mdp)(ArenaShow);