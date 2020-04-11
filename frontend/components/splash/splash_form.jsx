import React from 'react';
import { Link } from 'react-router-dom';


const Splash = () => {

    return (
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
                            <input
                                className="splash-search-input"
                                type="date"
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
    )
}

export default Splash;