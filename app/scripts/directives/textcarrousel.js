'use strict';

/**
 * @ngdoc directive
 * @name metronomeApp.directive:textCarrousel
 * @description
 * # textCarrousel
 */
var app = angular.module('metronomeApp');
app.directive('textCarrousel', function ($timeout) {
  return {
    restrict: 'A',
    link: function (scope, element, attrs) {
      let timeOutID,
        values,
        index = 0;

      values = attrs.values.split(',');

      function goToNextValue() {
        index += 1;

        if (index >= values.length) {
          index = 0;
        }
      };

      function setCarrouselText() {
        element.html(values[index]);
      };

      function updateCarrousel() {
        setCarrouselText();
        goToNextValue();
        scheduleNext();
      };

      function scheduleNext() {
        timeOutID = $timeout(function () {
          element.fadeOut(500, function () {
            $(this).text(values[index]).fadeIn(500);
            updateCarrousel();
          });
        }, 2000);
      };

      updateCarrousel();

      element.on('$destroy', function () {
        $timeout.cancel(timeOutID);
      });

      console.log(element);
      console.log(scope);
    }
  };
});
