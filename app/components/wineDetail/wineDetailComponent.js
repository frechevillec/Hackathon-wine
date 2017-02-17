'use strict';

// Register `phoneDetail` component, along with its associated controller and template
angular.
  module('wineDetail').
  component('wineDetail', {
    templateUrl: '/app/components/wineDetail/wineDetailTemplate.html',
    controller: ['$http', '$routeParams',
      function($http, $routeParams) {

        $http.get('http://wine.wildcodeschool.fr/api/v1/wines/' + $routeParams.wineId).then((response) => {
            this.wine = response.data;

            // console.log(this.market);
            //
            // this.marketInfos = [];
            //
            // this.marketInfos.push(this.market);
            //
            // this.marketInfos.map();

        })
      }
    ]
  });
