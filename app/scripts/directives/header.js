'use strict';

/**
 * @ngdoc directive
 * @name publicApp.directive:header
 * @description
 * # header
 */
angular.module('publicApp')
  .directive('header', function ($timeout, $window, $document, $rootScope) {
    /**
     * Module dependencies.
     */

    var TimelineMax = $window.TimelineMax;

    return {
      restrict: 'C',
      link: function postLink(scope, element) {
        /**
         * Handle "initialize" events.
         */

        scope.$on('initialize', function() {
          // defer by two frames
          $timeout(function() { requestAnimationFrame(function() {
            // fade in header
            element.addClass('in');

            // expand horizontal rule
            element.find('hr').addClass('expand');

            // initialize timeline and retrieve elements to animate
            var tl = new TimelineMax();
            var navLinks = element[0].querySelectorAll('li a');
            var navTitle = $document[0].getElementById('nav-title');
            tl
              // fade in and slide down links
              .staggerFromTo(navLinks, 0.4, {
                  opacity: 0,
                  y: -17 + -18
                }, {
                  opacity: 1,
                  y: 0
                }, 0.06)
              // fade in and rotate in title
              .fromTo(navTitle, 0.6, {
                opacity: 0,
                rotationX: 90,
                transformOrigin: '50% 50% -8.5px'
              }, {
                opacity: 1,
                rotationX: 0,
                transformOrigin: '50% 50% -8.5px'
              }, '-=0.4');
          }); });
        });

        /**
         * Handle "viewLoaded" events.
         */

        // scope.$on('viewLoaded', function() {
        //   var navTitle = $document[0].getElementById('nav-title');
        //   navTitle.textContent = null;
        // });

        /**
         * Handle "headerSlideUp" events.
         */

        scope.$on('headerSlideUp', function() {
          element.addClass('disabled');

          var tl = new TimelineMax();
          var logoContainer = $document[0].getElementById('logo-container');
          tl
            // wait for route animations
            .delay(0.6)
            // slide up header
            .to(logoContainer, 0.6, {
              height: 0,
              opacity: 0,
              onComplete: function() {
                element.removeClass('disabled');
              }
            });
        });

        /**
         * Handle "$stateChangeSuccess" events.
         */

        $rootScope.$on('$stateChangeSuccess', function() {
          var tl = new TimelineMax();
          var logoContainer = $document[0].getElementById('logo-container');
          tl
            // slide down header
            .to(logoContainer, 0.6, {
              height: 72,
              opacity: 1
            });
        });
      }
    };
  });
