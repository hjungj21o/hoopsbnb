import React from 'react';
import MarkerManager from '../../util/marker_manager';

class ArenasListMap extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const mapOptions = {
            center: { lat: 40.736251, lng: -73.990223 },
            zoom: 13
        };
        
        this.map = new google.maps.Map(this.mapNode, mapOptions);
        this.MarkerManager = new MarkerManager(this.map);

        this.map.addListener('idle', () => {
            const {north, south, east, west} = this.map.getBounds().toJSON();
            const bounds = {
                northEast: { lat: north, lng: east },
                southWest: { lat: south, lng: west }
            }
            this.props.updateFilter('bounds', bounds);
        });

        this.MarkerManager.updateMarkers(this.props.arenas);
    };

    componentDidUpdate() {
        this.MarkerManager.updateMarkers(this.props.arenas);
    }

    render() {
        return (
            <div className="search-map-container">
                <div id="map-container" ref={ map => this.mapNode = map }>
                    
                </div>
            </div>
        )
    }
}

export default ArenasListMap;