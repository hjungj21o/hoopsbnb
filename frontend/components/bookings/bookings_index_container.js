import bookingIndex from './booking_index';
import { connect } from 'react-redux';
import { fetchBookings, destroyBooking } from '../../actions/booking_actions';
import { withRouter } from 'react-router-dom';


const msp = state => {
    return {
        bookings: Object.values(state.entities.bookings)
    }
}

const mdp = dispatch => {
    return {
        fetchBookings: (bookingId) => dispatch(fetchBookings(bookingId)),
        destroyBooking: (bookingId) => dispatch(destroyBooking(bookingId))
    }
}

export default connect(msp, mdp)(bookingIndex);