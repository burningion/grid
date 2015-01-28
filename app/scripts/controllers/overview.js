'use strict';

/**
 * @ngdoc function
 * @name publicApp.controller:OverviewCtrl
 * @description
 * # OverviewCtrl
 * Controller of the publicApp
 */
angular.module('publicApp')
  .controller('OverviewCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
