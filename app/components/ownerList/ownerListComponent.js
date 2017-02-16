((app)=>{

'use strict'

// On crée notre component ownerList et on lui associe son template et son controller
app.component("ownerList", {
    templateUrl: "/app/components/ownerList/ownerListTemplate.html",
    controller: ["$http", function($http) {
        let ownerCollection;

        $http.get("http://wine.wildcodeschool.fr/api/v1/owners/58a44d20203172c04bf43f2c").then((response) => {
            this.owner = response.data;
        })
    }]
})
})(angular.module("ownerList"))
