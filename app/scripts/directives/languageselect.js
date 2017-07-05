'use strict';

/**
 * @ngdoc directive
 * @name metronomeApp.directive:languageSelect
 * @description
 * # languageSelect
 */
angular.module('metronomeApp')
  .directive('ngTranslateLanguageSelect', function (LocalService) {
    'use strict'
    return {
      replace: true,
      restrict: 'A',
      template: '' + '<div class="language-select" ng-if="visible">' +
      '<label>{{"directives.language-select.Language" | translate}}</label>' +
      '<md-select ng-model="currentLocaleDisplayName">' +
      '<md-option ng-options="localesDisplayName for localesDisplayName in localesDisplayNames "' +
      'ng-change="changeLanguage(currentLocaleDisplayName)"' + '>' +
      '</md-option>' +
      '</md-select>' + '</div>' + '',
      controller: function ($scope) {
        $scope.currentLocaleDisplayName = LocaleService.getLocaleDisplayName();
        $scope.localesDisplayNames = LocalService.getLocalesDisplayName();
        $scope.visible = $scope.localesDisplayNames &&
          $scope.localesDisplayNames.length > 1;

        $scope.changeLanguage = function (locale) {
          LocalService.setLocaleByDisplayName(locale);
        }
      }
    };
  });
