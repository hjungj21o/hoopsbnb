import React from 'react';
import NonSplashGreetingContainer from '../nav/nonsplash_greeting_container';
import BookingIndexItem from './booking_index_item';

class bookingIndex extends React.Component {
    constructor(props) {
        super(props);

        this.redirectToSplash = this.redirectToSplash.bind(this);
    };

    componentDidMount() {
        this.props.fetchBookings(this.props.match.params.userId);
    };

    redirectToSplash() {
        this.props.history.push('/');
    };

    render() {  
        const bookingsLi = this.props.bookings.reverse().map((booking, i) => {
            return <
                BookingIndexItem 
                key={`booking${i}`}
                destroyBooking={this.props.destroyBooking}
                arenas={this.props.arenas}
                currentUser={this.props.currentUser}
                fetchBookings={this.props.fetchBookings}
                booking={booking} 
                />
        });

        const displayBookings = () => (
            <div className="booking-upcoming-container">
                <div className="booking-upcoming-title">
                    {this.props.currentUser.first_name}, here are your upcoming games.
                </div>
                <div className="booking-upcoming-question">
                    You ready to hoop?
                </div>
                <div className="bookings-confirmed-tile">
                    {bookingsLi}
                </div>
            </div>
        );

        const noBookings = () => (
            <div className="nobooking-index-container">
                <div className="nobooking-index-text">
                    <div className="beep">
                        Beep!!
                    </div>
                    <div className="nobooking-text">
                        <p>You don't have any upcoming games. What are you waiting for?</p>
                        <button className="nobooking-splash" onClick={this.redirectToSplash}>Explore Hoopsbnb.</button>
                    </div>
                </div>
                <div className="nobooking-image-container">
                    <img src="https://hoopsbnb-seed.s3.amazonaws.com/streetball_illustration.jpg" className="nobooking-image" alt="no-bookings-image" />
                </div>
            </div>
        );

        const haveBookingsToggle = (Object.keys(this.props.arenas).length !== 0) ? displayBookings() : noBookings();

        return (
            <>
            <header>
                <NonSplashGreetingContainer />
            </header>
            {haveBookingsToggle}
            </>
        );
    };

}

export default bookingIndex;