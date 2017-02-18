((app) =>{

'use strict'

// on crée notre component wineliste et on lui associe son template et son controller

app.component("wineList", {
	templateUrl: "app/components/wineList/wineListTemplate.html",
	controller: ["$http", function($http) {
		let wineCollection;

		$http.get("http://wine.wildcodeschool.fr/api/v1/wines").then((response) => {
			this.wines = response.data
		})
	}]
})
})(angular.module("wineList"))
