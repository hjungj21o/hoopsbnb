import React from 'react';

class ArenaShowMap extends React.Component {
    constructor(props) {
        super(props);
    }
    

    componentDidMount() {
        const myLatLng = { lat: this.props.arena.lat, lng: this.props.arena.lng }
        const mapOptions = {
            center: myLatLng,
            zoom: 15
        };

        this.map = new google.maps.Map(this.mapNode, mapOptions);
        
        const marker = new google.maps.Marker({
            position: myLatLng
        });
        
        marker.setMap(this.map)
    }

    render() {
        return (
            <div id="map-container-show" ref={ map => this.mapNode = map } />
        )
    }

}

export default ArenaShowMap;