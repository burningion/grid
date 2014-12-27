'use strict';

/**
 * @ngdoc directive
 * @name publicApp.directive:teamMember
 * @description
 * # teamMember
 */
angular.module('publicApp')
  .directive('teamMember', function ($window, $timeout) {
    return {
      restrict: 'C',
      link: function postLink(scope, element, attrs) {
        scope.$on('mapLoaded', function() {
          /**
           * Module dependencies.
           */

          var overlay = $window.overlay;

          /**
           * Add marker.
           */

          var marker = angular.element('<div class="marker-team-member"></div>');
          angular.element('#map').append(marker);
          marker.attr('data-latlng', attrs.latlng);
          overlay.add(marker[0]);
        });
      }
    };
  });
