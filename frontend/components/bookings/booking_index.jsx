import React from 'react';
import NonSplashGreetingContainer from '../nav/nonsplash_greeting_container';
import BookingIndexItem from './booking_index_item';

class bookingIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchBookings(this.props.match.params.userId);
    }

    render() {
        const bookingsLi = this.props.bookings.map((booking, i) => {
            return <
                BookingIndexItem 
                key={`booking${i}`}
                deleteBooking={this.props.deleteBooking}
                booking={booking} 
                />
        });

        return (
            <>
            <header>
                <NonSplashGreetingContainer />
            </header>
            <div className="booking-upcoming-container">
                <div className="booking-upcoming-title">
                    Upcoming Games
                </div>
                {bookingsLi}
            </div>
            </>
        )
    }

}

export default bookingIndex;