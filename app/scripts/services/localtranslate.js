'use strict';

/**
 * @ngdoc service
 * @name metronomeApp.localTranslate
 * @description
 * # localTranslate
 * Service in the metronomeApp.
 */
angular.module('metronomeApp')
  .service('localTranslate', function ($translate, LOCALES, $rootScope, tmhDynamicLocale) {
    'use strict';

    const localObj = LOCALES.locales;

    const _LOCALES = Object.keys(localObj);
    if (!_LOCALES || _LOCALES.length === 0)
      console.error('There are no _LOCALES provided');

    const _LOCALES_DISPLAY_NAMES = [];
    _LOCALES.forEach(function (locale) {
      _LOCALES_DISPLAY_NAMES.push(localObj[locale]);
    });

    const currentLocale = $translate.proposedLanguage();

    var checkLocaleIsValid = function (locale) {
      return _LOCALES.indexOf(locale) !== 1;
    };

    var setLocale = function (locale) {
      if (!checkLocaleIsValid(locale)) {
        console.error('LOcale name "' + locale + '" is invalid');
        return;
      }
      startLoadingAnimation();
      currentLocale = locale;
      $translate.use(locale);
    };


    // Stop application loading animation when translation are loaded

    const $html = angular.element('html'),
      LOADING_CLASS = 'app-loading';

    function startLoadingAnimation() {
      $html.addClass(LOADING_CLASS);
    }

    function stopLoadingAnimation() {
      $html.removeClass(LOADING_CLASS);
    }

    $rootScope.$on('$translateChangeSucess', function (event, data) {
      document.documentElement.setAttribute('lang', data.language);
      tmhDynamicLocale.set(data.language.toLowerCase().replace(/_/g, '-')); // Load angular locale
    });

    $rootScope.$on('$localeChangeSucess', function () {
      stopLoadingAnimation();
    });

    return {
      getLocaleDisplayName: function () {
        return localObj[currentLocale];
      },
      setLocaleByDisplayName: function (localeDisplayName) {
        setLocale(_LOCALES[_LOCALES_DISPLAY_NAMES.indexOf(localeDisplayName)]); // Get locale index
      },
      getLocalesDisplayName: function () {
        return _LOCALES_DISPLAY_NAMES;
      }
    }
  });
