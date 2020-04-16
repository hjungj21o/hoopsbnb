import React from 'react';
import { Link } from 'react-router-dom';
import SplashGreetingContainer from '../nav/splash_greeting_container';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';


class Splash extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            date: null,
            focused: null
        }
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
                                SELECT DATE
                                <SingleDatePicker
                                    date={this.state.date} // momentPropTypes.momentObj or null
                                    onDateChange={date => this.setState({ date })} // PropTypes.func.isRequired
                                    focused={this.state.focused} // PropTypes.bool
                                    onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
                                    numberOfMonths={1}
                                    hideKeyboardShortcutsPanel={true}
                                    id="date-picker" // PropTypes.string.isRequired,
                                />
                            </label>
                        <div className="splash-search-check-time">
                            <label className="splash-search-label">
                                CHECK IN TIME
                                <input
                                    className="splash-search-input"
                                    type="time"
                                />
                            </label>
                            <label className="splash-search-label">
                                CHECK OUT TIME
                                <input
                                    className="splash-search-input"
                                    type="time"
                                />
                            </label>
                        </div>
                        <div className="splash-form-input">
                            <label className="splash-search-label">
                                TEAM OR SOLO?
                                <button type="text" className="splash-search-button">Add Teammates</button>
                            </label>
                        </div>
                        <div className="splash-search-submit-button-div">
                            <button className="splash-search-submit-button">
                                <Link to="/arenas">
                                    <i className="fas fa-search" />
                                    Search
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )}
}

export default Splash;