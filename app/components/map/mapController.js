((app)=>{

'use strict'

// On crée notre component marketList et on lui associe son template et son controller
app.component("map", {
   	templateUrl: "app/components/map/mapTemplate.html",
    controller: ['$http',
    function ($http) {

        $http.get('http://wine.wildcodeschool.fr/api/v1/markets/').then((response) => {
            this.markets = response.data;

            let map = L.map('map', {
                center: [44.83, -0.57],
                zoom: 13,
                zoomControl: false,
                autoDiscover: true
            });

            for(let i = 0; i < this.markets.length; i++) {
                let marker = new L.marker([Number(this.markets[i].position.split(",")[0]), Number(this.markets[i].position.split(",")[1])]).bindPopup('<a class="Link" href="#!/markets/' + this.markets[i]._id + '"><h2 class="Item__title">' + this.markets[i].name +'</a>').addTo(map);
            }

            // this.markets.forEach((position) => {
            //     return L.marker(position).addTo(map);
            // });

            L.control.zoom({
                position: 'bottomright'
            }).addTo(map);

            L.marker([44.83, -0.57]).addTo(map);

            L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
                maxZoom: 18,
                attribution: '',
                id: 'mapbox.streets'
            }).addTo(map);
        })
    }]
})

})(angular.module("map"))
