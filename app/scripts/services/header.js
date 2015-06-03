'use strict';

/**
 * @ngdoc service
 * @name publicApp.header
 * @description
 * # header
 * Service in the publicApp.
 */
angular.module('publicApp')
  .service('header', function ($rootScope) {
    /**
     * Slide up header.
     */

    this.slideUp = function() {
      $rootScope.$broadcast('headerSlideUp');
    };

    /**
     * Slide down header.
     */

    this.slideDown = function() {
      $rootScope.$broadcast('headerSlideDown');
    };
  });
