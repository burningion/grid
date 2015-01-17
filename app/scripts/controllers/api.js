'use strict';

/**
 * @ngdoc function
 * @name publicApp.controller:ApiCtrl
 * @description
 * # ApiCtrl
 * Controller of the publicApp
 */
angular.module('publicApp')
  .controller('ApiCtrl', function ($scope, marked, $http, $routeParams) {
    /**
     * Retrieve an article.
     */

    $scope.$watch(function() {
      return $routeParams.article;
    }, function(article) {
      article = article || 'Home';

      $http.get('docs/' + article + '.md').
        success(function(markdown) {
          $scope.article = markdown;
        }).
        error(function(markdown) {
          $scope.article = markdown;
        });
    });
  });
