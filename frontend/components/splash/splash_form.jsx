import React from 'react';
import { Link } from 'react-router-dom';
import SplashGreetingContainer from '../nav/splash_greeting_container';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import './_datepicker';
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
        this.searchUpdate = this.searchUpdate.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        this.props.arenasSearch(this.state.keyword)
            .then(() => this.props.history.push("/arenas"))
    }

    numHoopers(n) {
        this.setState({ hoopers: n });
    }

    searchUpdate(e) {
        e.preventDefault();

        this.setState({ keyword: e.currentTarget.value });
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
                        So, did you pack your shoes?
                    </div>
                    <br/>
                    <div className="splash-form-input">
                        <form onSubmit={this.handleSubmit}>
                            <label className="splash-search-label">
                                LOCATION
                                <input
                                    className="splash-search-input"
                                    type="text"
                                    placeholder="Try 'New York'"
                                    value={this.state.keyword}
                                    onChange={this.searchUpdate}
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
                                <button className="splash-search-submit-button">
                                    <i className="fas fa-search" />
                                    Search
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            </>
        )}
}

export default Splash;