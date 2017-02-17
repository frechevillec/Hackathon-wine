((app)=>{

'use strict'

// On crée notre component marketList et on lui associe son template et son controller
app.component("map", {
   	templateUrl: "/app/components/map/mapTemplate.html",
    controller: function () {
    	let mymap = L.map('map', {zoomControl: false}).setView([51.505, -0.09], 13);

        L.control.zoom({
            position: 'bottomright'
        }).addTo(mymap);

		L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    	maxZoom: 18,
    	attribution: '',
    	id: 'mapbox.streets'
		}).addTo(mymap);
    }
})


})(angular.module("map"))
