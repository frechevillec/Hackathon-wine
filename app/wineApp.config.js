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
        when('/markets/:marketId', {
          template: '<market-detail></market-detail>'
        }).
        when('/wines', {
          template: '<wine-list></wine-list>'
        }).
        when('/wines/:wineId', {
          template: '<wine-detail></wine-detail>'
        }).
        otherwise('/markets');
    }
  ]);
