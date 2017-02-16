((app)=>{

'use strict'

// On crée notre component marketList et on lui associe son template et son controller
app.component("marketList", {
    templateUrl: "/app/components/marketList/marketListTemplate.html",
    controller: ["$http", function($http) {
        let marketCollection;

        $http.get("http://wine.wildcodeschool.fr/api/v1/markets").then((response) => {
            this.markets = response.data;
        })
    }]
})
})(angular.module("marketList"))
