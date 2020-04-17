import React from 'react';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import { Link } from 'react-router-dom';
import moment from 'moment';

class ArenaShowBooking extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            date: null,
            focused: null,
            startTime: "11:00",
            endTime: "12:00",
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.props.currentUser) {
            let arena_id = this.props.arena.id;
            let start_time = this.state.startTime;
            let end_time = this.state.endTime;
            let newDate = moment(this.state.date).format('MM-DD-YYYY');
            let newBooking = {
                hooper_id: this.props.currentUser.id,
                arena_id,
                date: newDate,
                start_time,
                end_time,
            };
            const history = this.props.history;
            const userId = this.props.currentUser.id;
            this.props.createBooking(newBooking)
                .then(() => history.push(`/users/${userId}/bookings`));
        } else {
            this.props.openModal('login');
        }
    }

    render() {
        const toBookingIndex = () => (
            <input className="reserve-button reserve-confirm" type="submit" value="Reserve" />
        )

        const bookingLogin = () => (
            <input className="reserve-button reserve-log-in" type="submit" value="Log In to Reserve" />
        )
        const bookingHasUser = this.props.currentUser ? toBookingIndex() : bookingLogin()

        return (
            <form className="arenas-booking-form" onSubmit={this.handleSubmit}>
                <div className="arenas-booking-pricing">
                    <div className="booking-dollars">${this.props.arena.price}</div>
                    <div className="booking-per-hour">/ hour</div>
                </div>
                <div className="booking-rating">
                    <div className="booking-star">
                        <i className="fas fa-star" />
                        4.85 (99+ reviews)
                    </div>
                </div>
                <div className="booking-dates">
                    <label className="booking-search-label">
                        <div>
                            <SingleDatePicker
                                date={this.state.date} // momentPropTypes.momentObj or null
                                onDateChange={date => this.setState({ date })} // PropTypes.func.isRequired
                                focused={this.state.focused} // PropTypes.bool
                                onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
                                numberOfMonths={1}
                                hideKeyboardShortcutsPanel={true}
                                id="booking-date-picker" // PropTypes.string.isRequired,
                            />
                        </div>
                    </label>
                </div>
                <div className="booking-times booking-times-check-in">
                    <label className="booking-search-label">
                        Check-In 
                            <input
                        className="booking-search-input"
                        placeholder="11:00"
                        type="time"
                    />
                    </label>
                </div>
                <div className="booking-times booking-times-check-in">
                    <label className="booking-search-label">
                        Check-Out
                                <input
                            className="booking-search-input"
                            type="time"
                        />
                    </label>
                </div>
                {/* <div className="booking-form-input">
                    <label className="booking-search-label">
                        <button className="booking-search-input">Add Teammates</button>
                    </label>
                </div> */}
                <div className="booking-reserve-button">
                    {bookingHasUser}
                    <p>You won't be charged. Pinky promise.</p>
                </div>
            </form>
        )
    }
}

export default ArenaShowBooking;