'use strict';

/**
 * @ngdoc directive
 * @name metronomeApp.directive:header
 * @description
 * # header
 */
angular.module('metronomeApp')
  .directive('header', function () {
    return {
      restrict: 'A',
      replace: true,
      templateUrl: '../views/header.html',
      link: function postLink(scope, element, attrs) {
        console.log('header load');
        
        let openMenu = angular.element(document.querySelector('.open-menu')),
          closeMenu = angular.element(document.querySelector('.close-menu')),
          overlay = angular.element(document.querySelector('.overlay'));
        openMenu.on('click', function () {
          console.log('Click open menu');
          overlay.toggleClass('open');
        });

        closeMenu.on('click', function () {
          console.log('Click close menu');
          overlay.removeClass('open');
        });
      }
    };
  });
