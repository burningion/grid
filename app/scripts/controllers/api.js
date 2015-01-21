'use strict';

/**
 * @ngdoc function
 * @name publicApp.controller:ApiCtrl
 * @description
 * # ApiCtrl
 * Controller of the publicApp
 */
angular.module('publicApp')
  .controller('ApiCtrl', function ($window, marked, $scope, $routeParams, $http) {
    /**
     * Module dependencies.
     */

    var hljs = $window.hljs;

    /**
     * Override renderer methods.
     */

    var renderer = new marked.Renderer();

    /**
     * Add page headers.
     */

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

    /**
     * Make lists unstyled.
     */

    renderer.list = function(body, ordered) {
      var tag = ordered ? 'ol' : 'ul';
      return '<' + tag + ' class="list-unstyled">' +
        body +
      '</' + tag + '>';
    };

    /**
     * Add Bootstap tables.
     */

    renderer.table = function(header, body) {
      return '<table class="table table-condensed">' +
        header +
        body +
      '</table>';
    };

    /**
     * Add client and server labels.
     */

    renderer.em = function(text) {
      if (text === 'Client') {
        return '<span class="label label-client">Client</span>';
      }

      if (text === 'Server') {
        return '<span class="label label-server">Server</span>';
      }

      return '<em>' + text + '</em>';
    };

    /**
     * Set marked options.
     */

    marked.setOptions({
      highlight: function(code) {
        return hljs.highlightAuto(code).value;
      },
      renderer: renderer
    });

    /**
     * Retrieve an article.
     */

    $scope.$watch(function() {
      return $routeParams.article;
    }, function(article) {
      article = article || 'Home';

      $http.get('docs/' + article + '.md').
        success(function(markdown) {
          $scope.article = marked(markdown);
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
