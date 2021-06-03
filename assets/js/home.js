var map = L.map('map').setView([47, 2], 6);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 15,
    id: 'mapbox/light-v10',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoid2h5c2lnbnVwIiwiYSI6ImNra3drcnl0aDR0a2IydnF0bnpxaHZ6MHkifQ.DaHm2wRVOQo7fXz7yLC2KA'
}).addTo(map);

function style(feature) {
    //var region = feature.properties['code'];
    return {
        fillColor: 'grey',
        weight: 2,
        opacity: 1,
        color: 'white',
        fillOpacity: 0.4
    }
}

function setHighlight(e) {
    var layer = e.target;
    
    layer.setStyle({
        weight: 4,
        color: '#666666',
        fillOpacity: 0.6
    });

    layer.bringToFront();
}

function updateData(e) {
    
    var layer = e.target;
    var region = layer.feature.properties['code'];

    layer.setStyle({
        color: '#f14b4d'
    });
}

function resetHighlight(e) {
    geoJSONLayer.resetStyle(e.target);
}

function onEachFeature(feature, layer) {
    layer.on({
        mouseover: setHighlight,
        mouseout: resetHighlight,
        click: updateData
    });
}


let geoJSONLayer = L.geoJson(france, {
    style: style,
    onEachFeature: onEachFeature
}).addTo(map);