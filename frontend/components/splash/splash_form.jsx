import React from 'react';


const Splash = () => {

    return (
        <div className="splash-container">
            <div className="splash-form-container">
                <div className="splash-form-title">Find places to hoop - anytime, anywhere.</div>
                <br/>
                    <label className="splash-search-label">
                        LOCATION
                        <br/>
                        <input
                            className="splash-search-input"
                            type="text"
                            placeholder="Add city, landmark, or address"
                        />
                    </label>
                    <label className="splash-search-label">
                        SELECT DATE
                        <br/>
                        <input
                            className="splash-search-input"
                            type="date"
                        />
                    </label>
                <div>
                    <label className="splash-search-label">
                        CHECK IN TIME
                        <br/>
                        <input
                            className="splash-search-input"
                            type="time"
                        />
                    </label>
                    <label className="splash-search-label">
                        CHECK OUT TIME
                        <br/>
                        <input
                            className="splash-search-input"
                            type="time"
                        />
                    </label>
                </div>
                <div className="splash-search-submit-button-div">
                <button className="splash-search-submit-button">SEARCH</button>
                </div>
            </div>
        </div>
    )
}

export default Splash;