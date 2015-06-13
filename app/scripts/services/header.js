/*jshint newcap: false */
'use strict';

/**
 * @ngdoc service
 * @name publicApp.header
 * @description
 * # header
 * Service in the publicApp.
 */
angular.module('publicApp')
  .service('header', function ($rootScope, $window) {
    /**
     * Module dependencies.
     */

    var Lazy = $window.Lazy;

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
      self.nestedStates = states;
      $rootScope.$broadcast('headerStateChange', states);
    };

    /**
     * Get nested state by URL.
     */

    this.getNestedStateByUrl = function(url) {
      return Lazy(self.nestedStates)
        .find(function(state) {
          return state.href === url;
        });
    };
  });
