((app)=>{

'use strict'

// On crée notre component marketList et on lui associe son template et son controller
app.component("map", {
   	templateUrl: "/app/components/map/mapTemplate.html",
    controller: function () {
    	let mymap = L.map('map').setView([51.505, -0.09], 13);

		L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    	maxZoom: 18,
    	attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
        '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="http://mapbox.com">Mapbox</a>',
    	id: 'mapbox.streets'
		}).addTo(mymap);
    }	
})


})(angular.module("map"))
