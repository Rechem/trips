export default {
    all: {
        name:'all',
        restrictions: {
            latLngBounds: {
                west: -39.11133,
                north: 39.43619,
                east: 42.45117,
                south: 16.38339,
            },
        }, center: {
            lat: 28.52897,
            lng: 1.66421,
        },
        minZoom: 5,
        zoom: 5,
    },
    algiers: {
        name:'algiers',
        restrictions: {
            latLngBounds: {
                west: 2.71774,
                north: 36.86424,
                east: 3.46481,
                south: 36.53612,
            },
        }, center: {
            lat: 36.70024,
            lng: 3.09114,
        },
        minZoom: 11,
        zoom: 11,
    },
    annaba: {
        name:'annaba',
        restrictions: {
            latLngBounds: {
                west: 7.55859,
                north: 36.99981,
                east: 7.93213,
                south: 36.83622,
            },
        }, center: {
            lat: 36.86,
            lng: 7.74552,
        },
        minZoom: 12,
        zoom: 12,
    }
}