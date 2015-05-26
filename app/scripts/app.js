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
    'scrollto',
    'hljs',
    'hc.marked',
    'ngSanitize',
    'angular-loading-bar'
  ])

  /**
   * Configure states.
   */

  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when('/about', '/');
    $urlRouterProvider.otherwise('/404');

    $urlRouterProvider.rule(function($injector, $location) {
      var path = $location.path();
      if (path !== '/' && path.slice(-1) === '/') {
        $location.replace().path(path.slice(0, -1));
      }
    });

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
      .state('tutorials', {
        url: '/tutorials',
        templateUrl: 'views/tutorials.html',
        controller: 'TutorialsCtrl'
      })
      .state('tutorials.article', {
        url: '/:article',
        templateUrl: 'views/tutorials.article.html',
        controller: 'TutorialsCtrl'
      })
      .state('features', {
        url: '/features',
        templateUrl: 'views/features.html',
        controller: 'FeaturesCtrl'
      });
  })

  /**
   * Configure URL matcher.
   */

  .config(function ($urlMatcherFactoryProvider) {
    $urlMatcherFactoryProvider.strictMode(false);
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
