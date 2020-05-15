import React from 'react';
import { Link } from 'react-router-dom';
import SplashGreetingContainer from '../nav/splash_greeting_container';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import HoopersDropDown from "../bookings/hoopers_dropdown";

class Splash extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            startDate: null,
            endDate: null,
            focusedInput: null,
            keyword: "",
            filteredOptions: [],
            showOptions: false,
            hoopers: 1
        }
        this.numHoopers = this.numHoopers.bind(this);
    }

    numHoopers(n) {
        this.setState({ hoopers: n });
    }

    render() {
        return (
            <>
            <header>
                <SplashGreetingContainer />
            </header>
            <div className="splash-container">
                <div className="splash-form-container">
                    <div className="splash-form-title">
                        Find places to hoop anytime, anywhere.
                        So, did you pack your shoes?</div>
                    <br/>
                    <div className="splash-form-input">
                            <label className="splash-search-label">
                                LOCATION
                                <input
                                    className="splash-search-input"
                                    type="text"
                                    placeholder="Add city, landmark, or address"
                                />
                            </label>
                            <label className="splash-search-label">
                                SELECT DATES
                                <DateRangePicker
                                    startDatePlaceholderText="Start date"
                                    endDatePlaceholderText="End date"
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
                                />
                            </label>
                            <label>
                                HOOPERS
                                <HoopersDropDown arrowType="bookingArrow" numHoopers={this.numHoopers} />
                            </label>
                        <div className="splash-search-submit-button-div">
                            <Link to="/arenas">
                                <button className="splash-search-submit-button">
                                    <i className="fas fa-search" />
                                    Search
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )}
}

export default Splash;