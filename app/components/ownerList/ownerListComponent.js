((app)=>{

'use strict'

app.component("ownerList", {
    templateUrl: "app/components/ownerList/ownerListTemplate.html",
    controller: ["$http", function($http) {

        $http.get("http://wine.wildcodeschool.fr/api/v1/owners/").then((response) => {
            this.owners = response.data;
        })
    }]
})
})(angular.module("ownerList"))
