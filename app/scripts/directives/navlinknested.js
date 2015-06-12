'use strict';

/**
 * @ngdoc directive
 * @name publicApp.directive:navLinkNested
 * @description
 * # navLinkNested
 */
angular.module('publicApp')
  .directive('navLinkNested', function ($location, $timeout) {
    return {
      restrict: 'C',
      link: function postLink(scope, element) {
        /**
         * Update nav link.
         */

        function updateNavLink() {
          var routeName = $location.path();
          var link      = element.find('a');
          var href      = link.attr('href-match') ||
                          link.attr('href')       ||
                          '';
          href          = href.replace('/grid', '');
          if ((routeName === href) ||
              (href !== '/' && routeName.lastIndexOf(href, 0) === 0)) {
            // set active nav link
            element.addClass('active');
          } else {
            element.removeClass('active');
          }
        } updateNavLink();

        /**
         * Handle "viewLoaded" events.
         */

        scope.$on('viewLoaded', function() {
          $timeout(updateNavLink);
        });
      }
    };
  });
