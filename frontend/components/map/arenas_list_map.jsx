import React from 'react';

class ArenasListhMap extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const mapOptions = {
            center: { lat: 40.736251, lng: -73.990223 },
            zoom: 13
        };

        this.map = new google.maps.Map(this.mapNode, mapOptions);
    };

    render() {
        return (
            <div className="search-map-container">
                <div id="map-container" ref={ map => this.mapNode = map }>
                    
                </div>
            </div>
        )
    }
}

export default ArenasListhMap;