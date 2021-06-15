var map = L.map('map').setView([47, 2], 6);
var markers = L.markerClusterGroup();
var static_url = "/img/center.png"
var icon = L.icon({
    iconUrl: static_url
});

$( document ).ready(function() {
    console.log("ready");

    $.ajax({
        method : 'GET',
        url : 'getCenters',
        dataType: 'json',
        success: function(data) {
            console.log(data);
            addCenters(data.docs);
        },
        failure: function(data){
            alert('Cannot get DATA due to an error');
        }
    });
});

var regions_centers = {};
function addCenters(centers) {

    for (var i = 1; i < centers.length; i++) {
        if (centers[i].latitude != null) {
            var marker = L.marker([centers[i].latitude, centers[i].longitude]);
            markers.addLayer(marker);
            let popup = `   <div class="card">
            <div class="card-header">
                <h2>
              ${centers[i].rs}
                </h2>
            </div>
            <div class="card-body">
              <h3 class="card-title"> ${centers[i].adresse} </h3>
              <p class="card-text"> ${centers[i].tel_rdv}</p>
              <a href="/more" class="popup"> Plus d'informations </a>
              <a href="/rdv" class="popup">Prendre RDV </a>
            </div>
          </div>

            `;
            //marker.bindPopup("<h2>" + centers[i].rs + "</h2>" + "<h3>" + centers[i].adresse + "</h3><h3>" + centers[i].tel_rdv + "</h3>");
            marker.bindPopup(popup);
        }

        if (centers[i].region != null) {
            regions_centers[i] = centers[i].region;
            
        }
    }

    map.addLayer(markers);
}

markers.on('click', function(e){
    console.log("popup")
})

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

//CHART
const dataGeo = {
    labels: ['Vaccinés','Malades','Morts'],
    datasets : [{
        label: "Malade",
        backgroundColor: ['lightgreen','lightcoral','#050101'],
        data: [5706378,16470369,105631]
    }]
};

const configGeo = {
    type: 'doughnut',
    data: dataGeo,
    options: {
      plugins: {
        title: {
          display: true,
          text: 'Statistiques Nationales'
        },
      },
      responsive: true,
      
      }
    
};

var chartGeo = new Chart(
    document.getElementById('chart'),
    configGeo
);

function updateData(e) {
    
    var layer = e.target;
    var region = layer.feature.properties['code'];
    chartGeo.options.plugins.title.text = 'Statistiques de la Région '+layer.feature.properties['nom'];
    //chartGeo.data.datasets[0].data = stats[region];
    chartGeo.update()


    layer.setStyle({
        color: '#f14b4d'
    });
}


let geoJSONLayer = L.geoJson(france, {
    style: style,
    onEachFeature: onEachFeature
}).addTo(map);