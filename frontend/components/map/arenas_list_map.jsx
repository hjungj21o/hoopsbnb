import React from 'react';
import MarkerManager from '../../util/marker_manager';
import { login } from '../../util/session_api_util';

class ArenasListMap extends React.Component {
    constructor(props) {
        super(props);


        //this will toggle to true when markers are being placed
        this.placeMarker = false;
        this.boroughs = {
            manhattan: { lat: 40.7831, lng: -73.9712 },
            brooklyn: { lat: 40.6782, lng: -73.9442 },
            queens: { lat: 40.7282, lng: -73.7949 },
            bronx: { lat: 40.8448, lng: -73.8648 },
            "staten island": { lat: 40.5795, lng: -74.1502 },
            default: { lat: 40.736251, lng: -73.990223 }
        }
    }

    componentDidMount() {
 
        const mapOptions = {
            center: { lat: 40.736251, lng: -73.990223 },
            zoom: 12
        };
        
        this.map = new google.maps.Map(this.mapNode, mapOptions);
        this.MarkerManager = new MarkerManager(this.map);

        this.map.addListener('idle', () => {
            //when we render the map, if placeMarker is false, then we invoke updateFilter
            //to prevent double ajax call from happening
            if (!this.placeMarker) {
                const { north, south, east, west } = this.map.getBounds().toJSON();

                const bounds = {
                    northEast: { lat: north, lng: east },
                    southWest: { lat: south, lng: west }
                }

                this.props.updateFilter('bounds', bounds);
            }
            this.placeMarker = false;
        });

    };

    componentDidUpdate() {
        //when receiveArenas action is invoked and we place the markers using updateMarkers, 
        //we toggle placeMarker to true and then invoke updateMarkers to render markers on map
        //so when we go back to idle eventlistener(because eventlistener changed something on the map
        //thus causing it to enter idle state after all markers had been placed),because it was toggled true,
        //updateFilter does not get invoked due to our "if" checker. 
        this.placeMarker = true;
        this.MarkerManager.removeAllMarkers();
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