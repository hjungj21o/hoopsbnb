export default class MarkerManager {
    constructor(map) {
        this.map = map;
        this.markers = {};
    }

    updateMarkers(arenas) {
        const arenaObj = {};
        arenas.forEach(arena => arenaObj[arena.id] = arena);

        Object.keys(this.markers)
            .filter(arenaId => !arenaObj[arenaId])
            .forEach((arenaId) => this.removeMarker(this.markers[arenaId]))

        arenas.forEach(arena => {
            if (!Object.keys(this.markers).includes(arenas.id)) {
                this.createMarkerFromArena(arena);
            }
        })
    }

    createMarkerFromArena(arena) {
        const arenaLatLng = new google.maps.LatLng(arena.lat, arena.lng);

        const marker = new google.maps.Marker({
            position: arenaLatLng,
            map: this.map,
            arenaId: arena.id
        });
        this.markers[marker.arenaId] = marker;
    };

    removeMarker(marker) {
        this.markers[marker.arenaId].setMap(null);
        delete this.markers[marker.arenaId];
    }

}
