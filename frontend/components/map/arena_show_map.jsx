import React from 'react';

class ArenaShowMap extends React.Component {
    constructor(props) {
        super(props);
    }
    

    componentDidMount() {
        debugger;
        const myLatLng = { lat: this.props.arena.lat, lng: this.props.arena.lng }
        const mapOptions = {
            center: myLatLng,
            zoom: 15
        };
        debugger;
        this.map = new google.maps.Map(this.mapNode, mapOptions);
        // const marker = new google.maps.Marker({
        //     position: myLatLng,
        //     map: map
        // });
        // marker.setMap(map)
        // return map;
    }

    render() {
        debugger;
        return (
            <div className="search-map-container-show">
                <div id="map-container-show" ref={ map => this.mapNode = map }>
                </div>
            </div>
        )
    }

}

export default ArenaShowMap;