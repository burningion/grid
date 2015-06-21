'use strict';

/**
 * @ngdoc function
 * @name publicApp.controller:FeaturesCtrl
 * @description
 * # FeaturesCtrl
 * Controller of the publicApp
 */
angular.module('publicApp')
  .controller('FeaturesCtrl', function ($scope, header) {
    /**
     * Engine features.
     */

    $scope.features = [
      {
        name: 'GUI',
        href: '/features/GUI',
        include: 'views/features/gui.html'
      },
      {
        name: 'Client–Server Architecture',
        href: '/features/Client–Server_Architecture',
        include: 'views/features/architecture.html'
      },
      {
        name: 'Entities',
        href: '/features/Entities',
        include: 'views/features/entities.html'
      },
      {
        name: 'Pathfinding',
        href: '/features/Pathfinding',
        include: 'views/features/pathfinding.html'
      },
      {
        name: 'Live Reloading',
        href: '/features/Live_Reloading',
        include: 'views/features/livereloading.html'
      }
    ];

    /**
     * Expose engine features.
     */

    header.setNestedStates($scope.features);
  });
