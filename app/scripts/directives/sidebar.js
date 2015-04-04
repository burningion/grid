'use strict';

/**
 * @ngdoc directive
 * @name publicApp.directive:sidebar
 * @description
 * # sidebar
 */
angular.module('publicApp')
  .directive('sidebar', function ($window, $timeout, $document, $rootScope) {
    /**
     * Module dependencies.
     */

    var RoughEase = $window.RoughEase;
    var Quint     = $window.Quint;
    var TweenMax  = $window.TweenMax;

    return {
      restrict: 'C',
      link: function postLink(scope, element) {
        // Returns a random integer between min (included) and max (excluded)
        // Using Math.round() will give you a non-uniform distribution!
        function getRandomInt(min, max) {
          return Math.floor(Math.random() * (max - min)) + min;
        }

        /**
         * Restore CSS transitions on the next frame.
         */

        function restoreTransitions(a) {
          $timeout(function() {
            angular.element(a).css('transition-property', '');
          });
        }

        /**
         * Animate "sidebar" class.
         */

        function animateSidebar() {
          // retrieve elements to animate
          var a = element[0].getElementsByTagName('a');
          for (var i = 0; i < a.length; i++) {
            // disable CSS transitions
            angular.element(a[i]).css('transition-property', 'none');

            // configure grid flicker
            var flickerOutGrid = RoughEase.ease.config({
              strength: getRandomInt(1, 16 + 1),
              points: getRandomInt(20, 80 + 1),
              template: Quint.easeOut
            });

            TweenMax.fromTo(a[i], 0.45, {
              opacity: 0
            }, {
              opacity: 1,
              ease: flickerOutGrid,
              onComplete: restoreTransitions,
              onCompleteParams: [a[i]]
            });
          }
        }

        /**
         * Handle "initialize" event.
         */

        if ($rootScope.initialized) {
          requestAnimationFrame(animateSidebar);
        } else {
          var remove = scope.$on('$includeContentLoaded', function() {
            remove();
            requestAnimationFrame(animateSidebar);
          });
        }
      }
    };
  });
