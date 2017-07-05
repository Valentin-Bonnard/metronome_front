'use strict';

/**
 * @ngdoc function
 * @name metronomeApp.controller:AppCtrl
 * @description
 * # AppCtrl
 * Common application controller
 */
angular.module('metronomeApp')
    .controller('AppCtrl', function ($scope, $rootScope, $translate, VERSION_TAG) {
        $rootScope.VERSION_TAG = VERSION_TAG;

        /**
         * Translations for the view
         */

        const pageTitleTranslationId = 'PAGE_TITLE',
            pageContentTranslationId = 'PAGE_CONTENT';

        $translate(pageTitleTranslationId, pageContentTranslationId)
            .then(function (translatedPageTitle, translatedPageContent) {
                $rootScope.pageTitle = translatedPageTitle;
                $rootScope.pageContent = translatedPageContent;
            });

        /**
         * Scope locale
         */
        $scope.locale = $translate.use();

        /**
         *  Provide info about current route path
         */

        $rootScope.$on('$routeChangeSuccess', function (event, current) {
            $scope.currentPath = current.$$route.originalPath;
        });

        /**
         *  Events 
         */
        $rootScope.$on('$translateChangeSuccess', function (event, data) {
            $scope.locale = data.language;
            $rootScope.pageTitle = $translate.instant(pageTitleTranslationId);
            $rootScope.pageContent = $translate.instant(pageContentTranslationId);
        });

    });
