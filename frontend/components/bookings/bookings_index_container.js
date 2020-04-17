import bookingIndex from './booking_index';
import { connect } from 'react-redux';
import { fetchBookings, destroyBooking } from '../../actions/booking_actions';
import { withRouter } from 'react-router-dom';


const msp = (state) => {
    return {
        bookings: Object.values(state.entities.bookings),
        arenas: state.entities.arenas,
        currentUser: state.entities.users[state.session.id]
    }
}

const mdp = dispatch => {
    return {
        fetchBookings: (userId) => dispatch(fetchBookings(userId)),
        destroyBooking: (bookingId) => dispatch(destroyBooking(bookingId))
    }
}

export default connect(msp, mdp)(bookingIndex);