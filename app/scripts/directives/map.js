'use strict';

/**
 * @ngdoc directive
 * @name publicApp.directive:map
 * @description
 * # map
 */
angular.module('publicApp')
  .directive('map', function ($window) {
    /**
     * Module dependencies.
     */

    var $     = $window.jQuery;
    var async = $window.async;

    return {
      restrict: 'C',
      link: function postLink(scope, element) {
        /**
         * Initialize map.
         */

        function initializeMap() {
          var google     = $window.google;
          var center     = new google.maps.LatLng(33.6054149, -112.125051);
          var map;
          var DOMOverlay = $window.DOMOverlay;
          var overlay;

          var styles = [
            {
              'elementType': 'labels',
              'stylers': [
                { 'visibility': 'off' }
              ]
            },{
              'stylers': [
                { 'hue': '#00ccff' },
                { 'saturation': -86 },
                { 'lightness': -80 }
              ]
            },{
              'featureType': 'water',
              'stylers': [
                { 'color': '#1f2324' }
              ]
            },{
              'featureType': 'administrative',
              'elementType': 'geometry.fill',
              'stylers': [
                { 'visibility': 'off' }
              ]
            }
          ];

          var styledMap = new google.maps.StyledMapType(styles, {
            name: 'Planimeter'
          });
          var mapOptions = {
            backgroundColor: 'transparent',
            center: center,
            disableDefaultUI: true,
            mapTypeId: google.maps.MapTypeId.TERRAIN,
            zoom: 3
          };
          map = new google.maps.Map(element[0],
                mapOptions);
          map.mapTypes.set('Planimeter', styledMap);
          map.setMapTypeId('Planimeter');

          overlay = new DOMOverlay();

          if (google.maps.weather) {
            var cloudLayer = new google.maps.weather.CloudLayer();
            cloudLayer.setMap(map);
          }
        }

        /**
         * Get script in series.
         */

        function getScriptSeries(url) {
          return function(callback) {
            $.getScript(url, function() { callback(null); });
          };
        }

        /**
         * Create API callback.
         */

        function createAPICallback(fn) {
          return function(callback) {
            $window[fn] = function() { callback(null); };
          };
        }

        /**
         * Load depenencies.
         */

        async.series([
          getScriptSeries('//maps.googleapis.com/maps/api/js?libraries=weather&callback=initializeMap'),
          createAPICallback('initializeMap'),
          getScriptSeries('scripts/DOMOverlay.748df9c5.js')
        ], function() {
          initializeMap();
        });
      }
    };
  });
