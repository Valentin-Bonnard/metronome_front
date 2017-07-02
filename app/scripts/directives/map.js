'use strict';

/**
 * @ngdoc directive
 * @name metronomeApp.directive:map
 * @description
 * # map
 */
var module = angular.module('metronomeApp');
module.directive('map', function () {
  return {
    template: '<div></div>',
    restrict: 'E',
    replace: true,
    link: function (scope, element, attrs) {
      console.log(element);

      var myOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 6,
        disableDefaultUI: true,
        draggable: false,
        streetViewControl: false,
        scrollwheel: false,
        // The latitude and longitude to center the map (always required)

        // POSITION 1
        center: new google.maps.LatLng(48.858278, 2.294254), // EDIT THIS PART

        // How you would like to style the map. 
        // This is where you would paste any style found on Snazzy Maps.
        styles: [
          {
            "featureType": "all",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "saturation": 36
              },
              {
                "color": "#000000"
              },
              {
                "lightness": 40
              }
            ]
          },
          {
            "featureType": "all",
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "visibility": "on"
              },
              {
                "color": "#000000"
              },
              {
                "lightness": 16
              }
            ]
          },
          {
            "featureType": "all",
            "elementType": "labels.icon",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#000000"
              },
              {
                "lightness": 20
              }
            ]
          },
          {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [
              {
                "color": "#000000"
              },
              {
                "lightness": 17
              },
              {
                "weight": 1.2
              }
            ]
          },
          {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#000000"
              },
              {
                "lightness": 20
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#000000"
              },
              {
                "lightness": 21
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#000000"
              },
              {
                "lightness": 17
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [
              {
                "color": "#000000"
              },
              {
                "lightness": 29
              },
              {
                "weight": 0.2
              }
            ]
          },
          {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#000000"
              },
              {
                "lightness": 18
              }
            ]
          },
          {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#000000"
              },
              {
                "lightness": 16
              }
            ]
          },
          {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#000000"
              },
              {
                "lightness": 19
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#000000"
              },
              {
                "lightness": 17
              }
            ]
          }
        ]
      };
      var map = new google.maps.Map(document.getElementById(attrs.id), myOptions);

      var circle = {
        path: google.maps.SymbolPath.CIRCLE,
        fillColor: '#000000',
        fillOpacity: 1.0,
        scale: 12,
        strokeColor: '#000000',
        strokeOpacity: 1.0,
        strokeWeight: 1
      };
      // Let's also add a marker while we're at it
      var marker = new google.maps.Marker({

        // POSITION 1-1
        position: new google.maps.LatLng(48.858278, 2.294254),

        map: map,
        // icon: image,
        icon: circle,
        title: 'ex-nihilo'
      });

    }
  };
});


function MapCtrl($scope) {
  $scope.mapPin = 'No pin set yet';
}