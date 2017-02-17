'use strict';

angular.
  module('wineApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/markets', {
          template: '<map></map> <market-list></market-list>'
        }).
        when('/wines', {
          template: '<wine-list></wine-list>'
        }).
        otherwise('/markets');
    }
  ]);
