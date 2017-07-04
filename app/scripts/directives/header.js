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
      link: function postLink(scope) {
        console.log('header load');

        scope.IsVisible = true;
        console.log(scope.IsVisible);

        let openMenu = angular.element(document.querySelector('.open-menu')),
          closeMenu = angular.element(document.querySelector('.close-menu')),
          overlay = angular.element(document.querySelector('.overlay'));

        openMenu.on('click', function () {
          console.log('Click open menu');
          overlay.toggleClass('open');
          console.log(scope.IsVisible);

        });

        closeMenu.on('click', function () {
          console.log('Click close menu');
          overlay.removeClass('open');
          scope.IsVisible = true;
          console.log(scope.IsVisible);
        });

        let nav = angular.element(document.querySelector(".overlay-menu"));
        nav.on("click", "a", null, function () {
          console.log('tentative de fermeture');
          scope.IsVisible = true;
          overlay.removeClass('open')


        });

        scope.ShowHide = function () {
          //If DIV is visible it will be hidden and vice versa.
          scope.IsVisible = scope.IsVisible ? false : true;
        }
      }
    };
  });
