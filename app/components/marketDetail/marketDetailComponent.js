'use strict';

// Register `phoneDetail` component, along with its associated controller and template
angular.
  module('marketDetail').
  component('marketDetail', {
    templateUrl: '/app/components/marketDetail/marketDetailTemplate.html',
    controller: ['$http', '$routeParams',
      function($http, $routeParams) {

        $http.get('http://wine.wildcodeschool.fr/api/v1/markets/' + $routeParams.marketId).then((response) => {
            this.market = response.data;

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
