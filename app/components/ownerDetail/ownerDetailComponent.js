'use strict';

// Register `phoneDetail` component, along with its associated controller and template
angular.
  module('ownerDetail').
  component('ownerDetail', {
    templateUrl: 'app/components/ownerDetail/ownerDetailTemplate.html',
    controller: ['$http', '$routeParams',
      function($http, $routeParams) {

        $http.get('http://wine.wildcodeschool.fr/api/v1/owners/' + $routeParams.ownerId).then((response) => {
            this.owner = response.data;
        })

        $http.get('http://wine.wildcodeschool.fr/api/v1/owners/' + $routeParams.ownerId + '/products').then((response) => {
            this.products = response.data;
        })
      }
    ]
  });
