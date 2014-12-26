'use strict';

/**
 * @ngdoc directive
 * @name publicApp.directive:map
 * @description
 * # map
 */
angular.module('publicApp')
  .directive('map', function () {
    return {
      restrict: 'C',
      link: function postLink(scope, element) {
        element.text('this is the map directive');
      }
    };
  });
