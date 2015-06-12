/*jshint newcap: false */
'use strict';

/**
 * @ngdoc directive
 * @name publicApp.directive:header
 * @description
 * # header
 */
angular.module('publicApp')
  .directive('header', function ($timeout, $window, $document, $rootScope, $state, $compile) {
    /**
     * Module dependencies.
     */

    var TimelineMax = $window.TimelineMax;
    var Lazy        = $window.Lazy;

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
            var navLinks = element[0].querySelectorAll('li.nav-link a');
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
         * Initialize timeline.
         */

        var headerTimeline = new TimelineMax();

        /**
         * Handle "headerSlideUp" events.
         */

        scope.$on('headerSlideUp', function() {
          var logoContainer = $document[0].getElementById('logo-container');
          headerTimeline
            // wait for route animations
            .delay(0.6)
            // slide up header
            .to(logoContainer, 0.6, {
                height: 0,
                opacity: 0,
                // overwrite: 'all'
              });
        });

        /**
         * Handle "headerSlideDown" events.
         */

        scope.$on('headerSlideDown', function() {
          var logoContainer = $document[0].getElementById('logo-container');
          headerTimeline
            // slide down header
            .to(logoContainer, 0.6, {
                height: 72,
                opacity: 1,
                overwrite: 'all'
              });
        });

        /**
         * Append nested states to header.
         */

        function appendStates(element) {
          return function(state) { element.append($compile(
            '<li class="nav-link-nested">' +
              '<a href="/grid' + state.href + '">' + state.name + '</a>' +
            '</li>'
          )(scope)); };
        }

        /**
         * Handle "headerStateChange" events.
         */

        scope.$on('headerStateChange', function(e, states) {
          var nestedStates = $document[0].getElementById('states-nested');
          if (!states) {
            angular
              .element(nestedStates)
              .children()
              .remove();
            return;
          }

          var el = angular.element(nestedStates);
          Lazy(states)
            .each(appendStates(el));

          // defer by two frames
          $timeout(function() { requestAnimationFrame(function() {
            var navLinks = element[0].querySelectorAll('li.nav-link-nested a');
            headerTimeline
              // fade in and slide down links
              .staggerFromTo(navLinks, 0.4, {
                  opacity: 0,
                  y: -28 + -18
                }, {
                  opacity: 1,
                  y: 0
                }, 0.06, '-=0.6');
          }); });
        });
      }
    };
  });
