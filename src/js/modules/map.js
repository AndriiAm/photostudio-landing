const map = () => {
    // Initialize and add the map
    let map;

    async function initMap() {
        // The location of Uluru
        const position = { lat: 41.628488, lng: -0.882957 };
        // Request needed libraries.
        //@ts-ignore
        const { Map } = await google.maps.importLibrary("maps");
        const { AdvancedMarkerView } = await google.maps.importLibrary("marker");

        // The map, centered at Uluru
        map = new Map(document.querySelector(".searching-studio__map"), {
            zoom: 15,
            center: position,
            mapId: "DEMO_MAP_ID",
        });

        // The marker, positioned at Uluru
    }

    initMap();
}

export default map;