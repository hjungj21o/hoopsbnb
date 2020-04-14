import React from 'react';
import NonSplashGreetingContainer from '../nav/nonsplash_greeting_container';


class ArenaShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchArena(this.props.match.params.arenaId)
    }

    render() {
        const { arena } = this.props;
        if (!arena) {
            return <div></div>;
        }
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
                <div className="arena-details-text-container">
                        <div className="arena-title-city">
                            <div className="arena-details-name">
                                <div>
                                {arena.name}
                                </div>
                                <div className="gm-pic">
                                    {/* <img src="lebron_james"/> */}
                                    <p>Lebron</p>
                                </div>
                            </div>

                            <p>{arena.city}</p>
                        </div>
                
                    <div className="arena-gm-container">
                        <div className="arena-gm-descriptions">
                            <div className="arena-gm-title"><i className="fas fa-medal"></i>Lebron is a Superhost</div>
                            <div className="arena-gm-expand">
                                Superhosts are experienced, 
                                highly rated hosts who are committed to providing 
                                great stays for guests.
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
                        <div className="arena-long-description-contact-host">
                            Contact Host
                        </div>
                    </div>
                    <div className="amenities-container">
                        <div className="amenities-title">
                            Amenities
                        </div>
                        <div className="amenities-list-container">
                            <div className="amenities-left">
                                <ul>
                                    <li><i className="fas fa-tint" />Free Water</li>
                                    <li><i className="fas fa-basketball-ball" />Ball Rentals</li>
                                </ul>
                            </div>
                            <div className="amenities-right">
                                <ul>
                                    <li><i className="fas fa-layer-group" />Towels Available</li>
                                    <li><i className="fas fa-exclamation" />Referees On-Site</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default ArenaShow;