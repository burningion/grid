'use strict';

/**
 * @ngdoc function
 * @name publicApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the publicApp
 */
angular.module('publicApp')
  .controller('MainCtrl', function ($scope) {
    $scope.team = [
      {
        name:   'Davlyn Hafaiedh',
        latlng: '50.501079,4.4764595'
      },
      {
        name:   'Andrew McWatters',
        latlng: '33.6054149,-112.125051'
      },
      {
        name:   'Matthias Moninger',
        latlng: '47.6964719,13.3457347'
      },
      {
        name:   'Lachlan',
        latlng: '-39.3080008,176.9160145'
      },
      {
        name:   'Kamil Zmich',
        latlng: '53.3957166,-1.4994561'
      }
    ];
  });
