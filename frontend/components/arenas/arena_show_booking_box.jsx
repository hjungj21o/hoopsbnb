import React from 'react';

const ArenaShowBooking = ( { arena } ) => {
    return (
        <div className="arenas-booking-container">
            <div className="arenas-booking-pricing">
                <div className="booking-dollars">${arena.price}</div>
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
                    <input
                    className="splash-search-input"
                    type="date"
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
                <input type="submit" value="Reserve" />
                You won't be charged, ever.
            </div>
        </div>
    )
}

export default ArenaShowBooking;