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
          var tl           = new TimelineMax();
          var eyebrow      = element[0].getElementsByClassName('eyebrow');
          var largeBlock   = element[0].getElementsByClassName('large-block');
          var small        = element[0].getElementsByTagName('small');
          var callToAction = element[0].getElementsByClassName('btn');
          tl
            // wait for main to stagger in
            .delay(0.15)
            // fade in and slide down header
            .staggerFromTo([eyebrow, largeBlock, small], 0.4, {
                opacity: 0,
                y: -18
              }, {
                opacity: 1,
                y: 0
              }, 0.06)
            // rotate in call to action
            .fromTo(callToAction, 0.6, {
                opacity: 0,
                rotationX: 90,
                transformOrigin: '50% 50% -34.5px'
              }, {
                opacity: 1,
                rotationX: 0,
                transformOrigin: '50% 50% -34.5px'
              }, '-=0.4');
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
