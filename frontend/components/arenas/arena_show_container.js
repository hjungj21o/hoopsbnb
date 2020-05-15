import { connect } from 'react-redux';
import ArenaShow from './arena_show';
import { fetchArena } from '../../actions/arena_actions';
import { openModal } from '../../actions/modal_actions';
import { createBooking } from '../../actions/booking_actions';

const msp = (state, ownProps) => {
    return ({
        currentUser: state.entities.users[state.session.id],
        arena: state.entities.arenas[ownProps.match.params.arenaId]
    });
};

const mdp = dispatch => {
    return ({
        openModal: modal => dispatch(openModal(modal)),
        createBooking: booking => dispatch(createBooking(booking)),
        fetchArena: arenaId => dispatch(fetchArena(arenaId))
    });
}

export default connect(msp, mdp)(ArenaShow);