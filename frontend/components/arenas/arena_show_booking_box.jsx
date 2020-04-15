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
            startTime: '11:00',
            endTime: '12:00',
            linkToReserve: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        debugger;
        if (this.props.currentUser) {
            let arena_id = this.props.arena.id;
            let start_time = moment(this.state.startTime).format('HH:mm');
            let end_time = moment(this.state.endTime).format('HH:mm');
            let newBooking = {
                hooper_id: this.props.currentUser.id,
                arena_id,
                date: moment(this.state.date).format('MM/DD/YYYY'),
                start_time,
                end_time,
            };
            this.props.createBooking(newBooking);
            this.setState( { linkToReserve: true} );
        } else {
            this.props.openModal('login');
        }
    }

    render() {
        const toBookingIndex = () => (
            <input type="submit" value="Reserve" />
        )

        const bookingLogin = () => (
            <input type="submit" value="Reserve" />
        )
        const bookingHasUser = this.props.currentUser ? toBookingIndex() : bookingLogin()

        return (
            <form className="arenas-booking-form" onSubmit={this.handleSubmit}>
                <div className="arenas-booking-container">
                    <div className="arenas-booking-pricing">
                        <div className="booking-dollars">${this.props.arena.price}</div>
                        <div className="booking-per-hour">/ hour</div>
                    </div>
                    <div className="booking-rating">
                        <div className="booking-star">
                            <i className="fas fa-star" />
                            4.85
                        </div>
                        <div className="booking-rate-numbers">
                            (99+ reviews)
                        </div>
                    </div>
                    <div className="booking-dates">
                        <label className="splash-search-label">
                            DATE
                            <SingleDatePicker
                                date={this.state.date} // momentPropTypes.momentObj or null
                                onDateChange={date => this.setState({ date })} // PropTypes.func.isRequired
                                focused={this.state.focused} // PropTypes.bool
                                onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
                                numberOfMonths={1}
                                hideKeyboardShortcutsPanel={true}
                                id="booking-date-picker" // PropTypes.string.isRequired,
                            />
                        </label>
                    </div>
                    <div className="splash-form-input">
                        <label className="splash-search-label">
                            Team or Solo?
                            <button className="splash-search-input">Add Teammates</button>
                        </label>
                    </div>
                    <div className="booking-reserve-button">
                        {bookingHasUser}
                        You won't be charged, ever.
                    </div>
                </div>
            </form>
        )
    }
}

export default ArenaShowBooking;