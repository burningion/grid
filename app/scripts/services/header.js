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
     * Header.
     */

    var self = this;

    /**
     * Slide up header.
     */

    this.slideUp = function() {
      $rootScope.$broadcast('headerSlideUp');
      self.setNestedStates(null);
    };

    /**
     * Slide down header.
     */

    this.slideDown = function() {
      $rootScope.$broadcast('headerSlideDown');
    };

    /**
     * Set nested states.
     */

    this.setNestedStates = function(states) {
      $rootScope.$broadcast('headerStateChange', states);
    };
  });
