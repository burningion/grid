'use strict';

/**
 * @ngdoc overview
 * @name publicApp
 * @description
 * # publicApp
 *
 * Main module of the application.
 */
angular
  .module('publicApp', [
    'ui.router',
    'hljs',
    'hc.marked',
    'ngSanitize'
  ])

  /**
   * Configure states.
   */

  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when('/about', '/');
    $urlRouterProvider.otherwise('/404');

    $stateProvider
      .state('about', {
        url: '/',
        templateUrl: 'views/main.html'
      })
      .state('theme', {
        url: '/theme',
        templateUrl: 'views/theme.html'
      })
      .state('404', {
        url: '/404',
        templateUrl: 'views/404.html'
      })
      .state('api', {
        url: '/api',
        templateUrl: 'views/api.html',
        controller: 'ApiCtrl'
      })
      .state('api.article', {
        url: '/:article',
        templateUrl: 'views/api.article.html',
        controller: 'ApiCtrl'
      })
      .state('api.article.redirect', {
        url: '/',
        controller: 'ApiCtrl'
      });
  })

  /**
   * Configure application deep linking.
   */

  .config(function ($locationProvider) {
    $locationProvider
      .html5Mode(true)
      .hashPrefix('!');
  })

  /**
  * Decorate controllers with route name.
  */

  .config(function ($provide) {
    $provide.decorator('$controller', function ($location, $delegate) {
      return function(constructor, locals, later, indent) {
        function updateRouteName() {
          var path      = $location.path() || '/';
          var routeName = path.replace('/', '');
          if (routeName === '') {
         // routeName = 'main';
            routeName = 'about';
          }

          locals.$scope.routeName = routeName;
        } updateRouteName();

        locals.$scope.$on('$viewContentLoaded', updateRouteName);
        return $delegate(constructor, locals, later, indent);
      };
    });
  })

  /**
  * Instantiate FastClick.
  */

  .run(function($window, $document) {
    var FastClick = $window.FastClick;
    FastClick.attach($document[0].body);
  })

  /**
  * Default ease.
  */

  .run(function($window) {
    var TweenLite = $window.TweenLite;
    var Quint     = $window.Quint;
    TweenLite.defaultEase = Quint.easeOut;
  });
