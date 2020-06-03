import React from 'react';
import NonSplashGreetingContainer from '../nav/nonsplash_greeting_container';
import ArenaShowMap from '../map/arena_show_map';
import ArenaShowBookingContainer from './arena_show_booking_container';
import { DateRangePicker, DayPickerRangeController } from 'react-dates';
import { START_DATE, END_DATE } from 'react-dates/src/constants';
import isInclusivelyAfterDay from 'react-dates/src/utils/isInclusivelyAfterDay';
import moment from 'moment';
import HoopersDropDown from "../bookings/hoopers_dropdown";



class ArenaShow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            startDate: null,
            endDate: null,
            focusedInput: null,
            focusedInputLeftCol: START_DATE,
            bookedDates: [],
            focused: null,
            hoopers: 1
        };

        this.onFocusChange = this.onFocusChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.numHoopers = this.numHoopers.bind(this);
    }

    numHoopers(n) {
        this.setState({ hoopers: n });
    }

    componentDidMount() {
        this.props.fetchArena(this.props.match.params.arenaId)
    }

    onFocusChange() {
        this.setState({
            focusedInputLeftCol: this.state.focusedInputLeftCol === START_DATE ? END_DATE : START_DATE
        });
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
                hoopers: this.state.hoopers
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
        const { arena } = this.props;
        if (!arena) {
            return <div></div>;
        }

        const toBookingIndex = () => (
            <input className="reserve-button reserve-confirm" type="submit" value="Reserve" />
        )

        const bookingLogin = () => (
            <input className="reserve-button reserve-log-in" type="submit" value="Log In to Reserve" />
        )
        const bookingHasUser = this.props.currentUser ? toBookingIndex() : bookingLogin()

        return (
            <>
            <header>
                <NonSplashGreetingContainer />
            </header>
                <div className="arena-details-container">
                    <div className="arena-title-city-pics">
                        <div className="arena-pics">
                            <div className="arena-main-pic">
                                <img src={this.props.arena.photoUrls[0]} alt="main-photo" />
                            </div>
                            <div className="arena-sub-pics">
                                <div className="arena-sub-pic">
                                    <img 
                                        src="https://hoopsbnb-seed.s3.amazonaws.com/other_bball_court_cropped_2.jpg" 
                                        alt="alt-photo-2" 
                                    />
                                </div>
                                <div className="arena-sub-pic">
                                    <img
                                        src="https://hoopsbnb-seed.s3.amazonaws.com/other_bball_court_2_cropped.jpg"
                                        alt="alt-photo-3"
                                    />
                                </div>
                                <div className="arena-sub-pic">
                                    <img
                                        src="https://hoopsbnb-seed.s3.amazonaws.com/other_bball_court_3_cropped.jpg"
                                        alt="alt-photo-4"
                                    />
                                </div>
                                <div className="arena-sub-pic">
                                    <img
                                        src="https://hoopsbnb-seed.s3.amazonaws.com/other_bball_court_4_cropped_2.jpg"
                                        alt="alt-photo-4"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                <div className="arena-show-container">
                    <div className="arena-details-text-container">
                            <div className="arena-title-city">
                                <div className="arena-details-name">
                                    <div>
                                    {arena.name}
                                    </div>
                                    <div className="gm-pic-container">
                                        <img className="gm-pic" src={"https://hoopsbnb-seed.s3.amazonaws.com/lebron_cropped.png"}/>
                                        <p>LeBron</p>
                                    </div>
                                </div>

                                <p>{arena.city}</p>
                            </div>
                            
                            <div className="arenas-show-key-list">
                                <ul>
                                    <li>20 hoopers</li>
                                    <li>Day or Night</li>
                                    <li>Regulation Size</li>
                                </ul>
                            </div>
                    
                        <div className="arena-gm-container">
                            <div className="arena-gm-descriptions">
                                <div className="arena-gm-title"><i className="fas fa-medal"></i>LeBron is a Superhost</div>
                                <div className="arena-gm-expand">
                                    Superhosts are experienced, 
                                    highly rated hosts who are committed to providing 
                                    great stays for guests.
                                </div>
                                <div className="arena-gm-title"><i className="fas fa-basketball-ball" />Entire Court</div>
                                <div className="arena-gm-expand">
                                    You own the court - your court, your rules.
                                    No more "I got next"s.
                                    Run it back until you can't.
                                </div>
                                <div className="arena-gm-title"><i className="fas fa-hand-sparkles"></i>Sparkling clean</div>
                                <div className="arena-gm-expand">
                                    16 recent guests said this place was sparkling clean.
                                </div>
                                <div className="arena-gm-title"><i className="far fa-smile"></i>Great check-in experience</div>
                                <div className="arena-gm-expand">
                                    100% of recent guests gave the check-in process a 5-star rating.
                                </div>
                            </div>
                        </div>
                        <div className="arena-long-description-container">
                            <div className="arena-long-description">
                                {arena.description}
                            </div>
                        </div>
                        <div className="amenities-container">
                            <div className="amenities-title">
                                Amenities
                            </div>
                            <div className="amenities-list-container">
                                <li><i className="fas fa-tint" />Free Water</li>
                                <li><i className="fas fa-basketball-ball" />Ball Rentals</li>
                                <li><i className="fas fa-layer-group" />Towels Available</li>
                                <li><i className="fas fa-exclamation" />Referees On-Site</li>
                            </div>
                        </div>
                        <div className="arena-availabilities-container">
                        <div className="availabilities-title">
                            Availabilities
                        </div>
                        <div className="availabilities-description">
                            Enter your desired hoop dates for accurate pricing and availability.
                        </div>
                        <DayPickerRangeController
                                startDate={this.state.startDate}
                                endDate={this.state.endDate}
                                onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })}
                                focusedInput={this.state.focusedInputLeftCol}
                                onFocusChange={this.onFocusChange}
                                initialVisibleMonth={() => moment().add(0, "M")}
                                numberOfMonths={2}
                                // isOutsideRange={day => !isInclusivelyAfterDay(day, moment())}
                                hideKeyboardShortcutsPanel={true}
                        />
                        </div>
                        <div className="arena-show-map-container">
                            <div className="show-map-title">
                                The Neighborhood
                            </div>
                            <ArenaShowMap arena={this.props.arena} />
                            <div className="show-map-description">
                                Exact location information is provided after a booking is confirmed.
                            </div>
                        </div>

                    </div>

                    <form className="arenas-booking-form" onSubmit={this.handleSubmit}>
                        <div className="arenas-booking-pricing">
                            <div className="booking-dollars">${this.props.arena.price}</div>
                            <div className="booking-per-day">/ day</div>
                        </div>
                        <div className="booking-rating">
                            <div className="booking-star">
                                <i className="fas fa-star" />
                                4.85 (99+ reviews)
                            </div>
                        </div>
                        <div className="booking-dates">
                            <DateRangePicker
                                startDate={this.state.startDate}
                                startDateId="mm/dd/yyyy"
                                endDate={this.state.endDate}
                                endDateId="mm/dd/yyyy"
                                onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })}
                                focusedInput={this.state.focusedInput}
                                onFocusChange={focusedInput => this.setState({ focusedInput })}
                                numberOfMonths={1}
                                hideKeyboardShortcutsPanel={true}
                                startDatePlaceholderText="Check-in"
                                endDatePlaceholderText="Check-out"
                                block={true}
                                noBorder={false}
                            // isDayBlocked={day => this.dayBlocked(day)}
                            />
                        </div>
                        <HoopersDropDown arrowType="bookingArrow" numHoopers={this.numHoopers} />
                        <div className="booking-reserve-button">
                            {bookingHasUser}
                            <p>You won't be charged. Pinky promise.</p>
                        </div>
                    </form>
                </div>
            </div>
            </>
        )
    }
}

export default ArenaShow;