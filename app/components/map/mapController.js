((app)=>{

'use strict'

// On crée notre component marketList et on lui associe son template et son controller
app.component("map", {
   	templateUrl: "/app/components/map/mapTemplate.html",
    controller: function () {
      let map = L.map('map', {
        center: [44.83, -0.57],
        zoom: 14,
        zoomControl: false,
        autoDiscover: true
    });

    L.control.zoom({
            position: 'bottomright'
        }).addTo(map);
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 18,
    attribution: '',
    id: 'mapbox.streets'
    }).addTo(map);	
}})


})(angular.module("map"))
