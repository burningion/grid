'use strict';

/**
 * @ngdoc directive
 * @name publicApp.directive:about
 * @description
 * # about
 */
angular.module('publicApp')
  .directive('about', function ($window, $rootScope) {
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
          var tl      = new TimelineMax();
          var h1      = element[0].getElementsByTagName('h1');
          var small   = element[0].getElementsByTagName('small');
          var members = element[0].getElementsByClassName('list-group-item');
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
            // rotate in team members
            .staggerFromTo(members, 0.6, {
                opacity: 0,
                rotationX: 90,
                transformOrigin: '50% 50% -19.5px'
              }, {
                opacity: 1,
                rotationX: 0,
                transformOrigin: '50% 50% -19.5px'
              }, 0.06, '-=0.4');
        }

        /**
         * Initialize map.
         */

        function initializeMap() {
        }

        /**
         * Handle "initialize" event.
         */

        if ($rootScope.initialized) {
          requestAnimationFrame(animateAbout);
        } else {
          var remove = scope.$on('initialize', function() {
            remove();
            initializeMap();
            requestAnimationFrame(animateAbout);
          });
        }

        /**
        * Handle "$destroy" event.
        */

        scope.$on('$destroy', function() {
        });
      }
    };
  });
