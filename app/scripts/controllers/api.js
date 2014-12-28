'use strict';

/**
 * @ngdoc function
 * @name publicApp.controller:ApiCtrl
 * @description
 * # ApiCtrl
 * Controller of the publicApp
 */
angular.module('publicApp')
  .controller('ApiCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
