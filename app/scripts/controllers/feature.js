'use strict';

/**
 * @ngdoc function
 * @name publicApp.controller:FeatureCtrl
 * @description
 * # FeatureCtrl
 * Controller of the publicApp
 */
angular.module('publicApp')
  .controller('FeatureCtrl', function ($scope, $stateParams, header) {
    /**
     * Retrieve a feature.
     */

    $scope.$watch(function () {
      return $stateParams.feature;
    }, function (feature) {
      var state = header.getNestedStateByUrl('/features/' + feature);
      if (!feature) { return; }
      $scope.feature = state.include;
    });
  });
