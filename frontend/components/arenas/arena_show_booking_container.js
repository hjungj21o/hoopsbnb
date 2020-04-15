import { connect } from 'react-redux';
import ArenaShowBooking from './arena_show_booking_box';
import { openModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom';
import { createBooking } from '../../actions/booking_actions';

const msp = (state, ownProps) => {
    debugger;
    return ({
        currentUser: state.entities.users[state.session.id],
        arena: state.entities.arenas[ownProps.match.params.arenaId]
    });
};

const mdp = dispatch => {
    debugger;
    return ({
        openModal: modal => dispatch(openModal(modal)),
        createBooking: booking => dispatch(createBooking(booking))
    })
};


export default withRouter(connect(msp, mdp)(ArenaShowBooking));

