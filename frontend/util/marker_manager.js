export default class MarkerManager {
    constructor(map) {
        this.map = map;
        this.markers = {};
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

    updateMarkers(arenas) {
        arenas.forEach(arena => {
            if (!Object.keys(this.markers).includes(arenas.id)) {
                this.createMarkerFromArena(arena);
            }
        })
    }
}
