'use strict';

/**
 * @ngdoc directive
 * @name publicApp.directive:main
 * @description
 * # main
 */
angular.module('publicApp')
  .directive('main', function ($rootScope, $timeout) {
    return {
      restrict: 'C',
      link: function postLink(scope, element) {
        /**
         * Fade in main section.
         */

        function fadeIn() {
          if (!$rootScope.initialized) {
            return;
          }

          // defer by two frames
          $timeout(function() { requestAnimationFrame(function() {
            element.find('section').addClass('in');
          }); }, 1000 * 0.15);
        }

        /**
         * Handle "initialize" events.
         */

        scope.$on('initialize', fadeIn);

        /**
         * Handle "viewLoaded" events.
         */

        scope.$on('viewLoaded', fadeIn);
      }
    };
  });
