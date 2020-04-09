import React from 'react';


class ArenaShow extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { arena } = this.props;
        return (
            <div className="arena-details-container">
                <div className="arena-title-city-pics">
                    <div className="arena-title-city">
                        <h3>{arena.name}</h3>
                        <p>{arena.city}</p>
                    </div>
                    <div className="gm-pic">
                        {/* <img src="lebron_james"/> */}
                        <p>Lebron</p>
                    </div>
                </div>
                <div className="arena-gm-container">
                    <div className="arena-gm-descriptions">
                        <div className="arena-gm-title">Lebron is a Superhost</div>
                        <div className="arena-gm-expand">
                            Superhosts are experienced, 
                            highly rated hosts who are committed to providing 
                            great stays for guests.
                        </div>
                        <div className="arena-gm-title">Sparkling clean</div>
                        <div className="arena-gm-expand">
                            16 recent guests said this place was sparkling clean.
                        </div>
                        <div className="arena-gm-title">Great check-in experience</div>
                        <div className="arena-gm-expand">
                            100% of recent guests gave the check-in process a 5-star rating.
                        </div>
                    </div>
                </div>
                <div className="arena-long-description-container">
                    <div className="arena-long-description">
                        {arena.description}
                    </div>
                    <div className="arena-long-description-contact-host">
                        Contact Host
                    </div>
                </div>
                <div className="amenities-container">
                    <div className="amenities-title">
                        
                    </div>
                </div>
            </div>
        )
    }
}