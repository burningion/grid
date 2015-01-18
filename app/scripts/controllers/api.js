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
     * Override renderer methods.
     */

    var renderer = new marked.Renderer();

    renderer.heading = function (text, level) {
      var escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');

      return (level === 1 ? '<div class="page-header">' : '') +
        '<h' + level + '>' +
          '<a name="' + escapedText + '" ' +
            'class="anchor" ' +
            'href="#' + escapedText + '"><span class="header-link"></span>' +
          '</a>' +
          text +
        '</h' + level + '>' +
      (level === 1 ? '</div>' : '');
    };

    renderer.table = function(header, body) {
      return '<table class="table">' +
        header +
        body +
      '</table>';
    };

    /**
     * Retrieve an article.
     */

    $scope.$watch(function() {
      return $routeParams.article;
    }, function(article) {
      article = article || 'Home';

      $http.get('docs/' + article + '.md').
        success(function(markdown) {
          $scope.article = marked(markdown, { renderer: renderer });
        }).
        error(function() {
          $scope.article = marked('Cannot GET /grid/docs/' + article + '.md');
        });
    });

    /**
    * Watch "article" changes.
    */

    $scope.$watch('article', function(markdown) {
      if (!markdown) {
        return;
      }

      if (markdown.indexOf('<p>&lt;!DOCTYPE html&gt;') !== 0) {
        return;
      }

      var article = $routeParams.article || 'Home';
      $scope.article = marked('Cannot GET /grid/docs/' + article + '.md');
    });
  });
