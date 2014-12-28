'use strict';

/**
 * @ngdoc directive
 * @name publicApp.directive:about
 * @description
 * # about
 */
angular.module('publicApp')
  .directive('about', function ($window, $compile, $rootScope) {
    /**
     * Module dependencies.
     */

    var TimelineMax = $window.TimelineMax;

    return {
      restrict: 'C',
      link: function postLink(scope, element) {
        /**
         * Animate "about" route.
         */

        function animateAbout() {
          // initialize timeline and retrieve elements to animate
          var tl    = new TimelineMax();
          var h1    = element[0].getElementsByTagName('h1');
          var small = element[0].getElementsByTagName('small');
          var p     = element[0].getElementsByTagName('p');
          var btn   = element[0].getElementsByClassName('btn');
          tl
            // wait for main to stagger in
            .delay(0.15)
            // fade in and slide down header
            .staggerFromTo([h1, small], 0.4, {
                opacity: 0,
                y: -18
              }, {
                opacity: 1,
                y: 0
              }, 0.06)
            // rotate in paragraph and call to action
            .staggerFromTo([p, btn], 0.6, {
                opacity: 0,
                rotationX: 90,
                transformOrigin: '50% 50% -23.5px'
              }, {
                opacity: 1,
                rotationX: 0,
                transformOrigin: '50% 50% -23.5px'
              }, 0.06, '-=0.4');
        }

        /**
         * Handle "initialize" event.
         */

        if ($rootScope.initialized) {
          requestAnimationFrame(animateAbout);
        } else {
          var remove = scope.$on('initialize', function() {
            remove();
            requestAnimationFrame(animateAbout);
          });
        }
      }
    };
  });
