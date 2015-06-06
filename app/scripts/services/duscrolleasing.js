'use strict';

/**
 * @ngdoc service
 * @name publicApp.duScrollEasing
 * @description
 * # duScrollEasing
 * Value in the publicApp.
 */
angular.module('publicApp')
  .value('duScrollEasing', function (t) { return 1+(--t)*t*t*t*t; });
