'use strict';

/**
 * @ngdoc function
 * @name publicApp.controller:OverviewCtrl
 * @description
 * # OverviewCtrl
 * Controller of the publicApp
 */
angular.module('publicApp')
  .controller('OverviewCtrl', function ($scope) {
    $scope.features = [
      {
        title: 'Classes via lclass',
        description: 'lclass is a minimalistic class implementation for ' +
        'Lua 5.1 that allows for class redefinition during runtime'
      },
      {
        title: 'Client-server model',
        description: 'Grid is designed with massive-multiplayer capabilities ' +
        'in mind first, while still allowing you to create singleplayer games'
      },
      {
        title: 'Common convenience classes',
        description: 'Spend more time on game logic than recreating the ' +
        'wheel with Grid\'s built in convenience classes for colors, ' +
        'vectors, and more'
      },
      {
        title: 'Effortless networking',
        description: 'Instead of worrying about packing bytes, utilize ' +
        'Grid\'s key-value based type-length-value payload system'
      },
      {
        title: 'Elegant GUI system',
        description: 'Create your next beautiful UI using Grid\'s intuitive ' +
        'GUI system'
      },
      {
        title: 'Entity system',
        description: 'Create mystical items and devistating bosses faster so ' +
        'you can get a better feel for gameplay ideas sooner than later'
      },
      {
        title: 'Threaded LuaSec support',
        description: 'Pull data from the web without blocking your game, and ' +
        'do it securely now, too'
      },
      {
        title: 'Tiled-based region system',
        description: 'Create your next top-down or sidescroller game with a ' +
        'familiar workflow'
      },
      {
        title: 'Lua 5.1.5 base library extensions',
        description: 'Grid provides a number of new methods in Lua\'s base ' +
        'libraries that assist with common tasks and game development'
      },
      {
        title: 'Real-time scripting',
        description: 'Prototype rapidly by seeing your changes on the fly ' +
        'rather than restarting your game after each change'
      },
      {
        title: 'JSON decoding and encoding via JSON4Lua',
        description: 'Interpret JSON responses using the most popular JSON ' +
        'library for Lua.'
      },
      {
        title: 'MD5 sums via md5.lua',
        description: 'Calculate MD5 sums without hassle'
      },
      {
        title: 'UTF-8 aware string functions via utf8.lua',
        description: 'Lua and LÖVE are UTF-8 capable, and Grid is, too'
      }
    ];
  });
