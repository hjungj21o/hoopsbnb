import * as BookingsApiUtil from '../util/booking_api_util';

export const RECEIVE_BOOKINGS = 'RECEIVE_BOOKINGS';
export const RECEIVE_BOOKING = 'RECEIVE_BOOKING';


const receiveBookings = bookings => ({
    type: RECEIVE_BOOKINGS,
    bookings
});

const receiveBooking = booking => ({
    type: RECEIVE_BOOKING,
    booking
});

export const fetchBookings = (userId) => dispatch => (
    BookingsApiUtil.fetchBookings(userId)
        .then(bookings => dispatch(receiveBookings(bookings)))
);

export const fetchBooking = (bookingId) => dispatch => (
    BookingsApiUtil.fetchBooking(bookingId)
        .then(booking => dispatch(receiveBooking(booking)))
);

export const updateBooking = booking => dispatch => (
    BookingsApiUtil.updateBooking(booking)
        .then(booking => dispatch(receiveBooking(booking)))
);






