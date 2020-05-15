import React from 'react';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import './_datepicker.css';
import { Link } from 'react-router-dom';
import moment from 'moment';

class ArenaShowBooking extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            startDate: this.props.startDate,
            endDate: this.props.endDate,
            focused: null,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.props.currentUser) {
            let arena_id = this.props.arena.id;
            let startDate = moment(this.state.startDate).format('YYYY-MM-DD');
            let endDate = moment(this.state.endDate).format('YYYY-MM-DD');
            let newBooking = {
                hooper_id: this.props.currentUser.id,
                arena_id,
                start_date: startDate,
                end_date: endDate,
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
                    <div className="booking-per-hour">/ day</div>
                </div>
                <div className="booking-rating">
                    <div className="booking-star">
                        <i className="fas fa-star" />
                        4.85 (99+ reviews)
                    </div>
                </div>
                <div className="booking-dates">
                    <DateRangePicker
                        block={true}
                        startDate={this.state.startDate}
                        startDateId="datepicker_start_search_form"
                        endDate={this.state.endDate}
                        endDateId="datepicker_end_search_form"
                        noBorder={false}
                        onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })}
                        focusedInput={this.state.focusedInput}
                        onFocusChange={focusedInput => this.setState({ focusedInput })}
                        numberOfMonths={1}
                        hideKeyboardShortcutsPanel={true}
                        startDatePlaceholderText="Check-in"
                        endDatePlaceholderText="Checkout"
                        block={true}
                        noBorder={false}
                    />
                </div>
                <div className="booking-reserve-button">
                    {bookingHasUser}
                    <p>You won't be charged. Pinky promise.</p>
                </div>
            </form>
        )
    }
}

export default ArenaShowBooking;