import React from 'react';
import { withRouter } from 'react-router-dom';

class bookingIndexItem extends React.Component {
    constructor(props) {
        super(props);

        this.cancelBooking = this.cancelBooking.bind(this);
        this.redirectToArena = this.redirectToArena.bind(this);
    }

    redirectToArena() {
        const arenaId = this.props.booking.arena_id;
        this.props.history.push(`/arenas/${arenaId}`);
    }

    cancelBooking() {
        const userId = this.props.currentUser.id;
        const fetchBookings = this.props.fetchBookings;
        this.props.destroyBooking(this.props.booking.id)
            .then(() => fetchBookings(userId));
    }


    render() {
        const { booking, arenas } = this.props;
        const arena = arenas[booking.arena_id];

        if (Object.keys(booking).length === 0) return <div>fetching data...</div>
        
        return (
            <div className="bookings-index-item">
                <div className="booking-arena-picture">
                    <img 
                    src={arena.photoUrls[0]} 
                    className="booking-arena-img"
                    onClick={this.redirectToArena}
                    alt="arena-image"
                    />
                </div>
                <div className="bookings-index-confirm">
                    <div className="bookings-confirmed">Confirmed!!</div> 
                    <div className="booking-confirmation-num">Confirmation #: {booking.id}</div>
                </div>
                <div className="booking-index-time">
                    Check-in Date: {booking.start_date}
                    <br></br> 
                    Check-out Date: {booking.end_date}
                </div>
                <button className="booking-cancel-button" onClick={this.cancelBooking}>
                    Cancel Booking
                </button>
            </div>
        )
    }
}

export default withRouter(bookingIndexItem);