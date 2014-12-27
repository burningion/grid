'use strict';

/**
 * @ngdoc directive
 * @name publicApp.directive:teamMember
 * @description
 * # teamMember
 */
angular.module('publicApp')
  .directive('teamMember', function ($window) {
    return {
      restrict: 'C',
      link: function postLink(scope, element, attrs) {
        scope.$on('mapLoaded', function() {
          /**
           * Module dependencies.
           */

          var map     = $window.map;
          var overlay = $window.overlay;
          var google  = $window.google;

          /**
           * Add marker.
           */

          var marker = angular.element('<div class="marker-team-member"></div>');
          angular.element('#map').append(marker);
          marker.attr('data-latlng', attrs.latlng);
          overlay.add(marker[0]);

          /**
           * Update marker.
           */

          function update() {
            if (element.hasClass('active')) {
              marker.addClass('active');

              var latlng = marker.data('latlng').split(',');
              map.center = new google.maps.LatLng(+latlng[0], +latlng[1]);
              map.panTo(map.center);
            } else {
              marker.removeClass('active');
            }
          }

          /**
           * Watch "class" changes.
           */

          scope.$watch(function() {
            return element.attr('class');
          }, update);
        });
      }
    };
  });
