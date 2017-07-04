'use strict';

/**
 * @ngdoc service
 * @name metronomeApp.weather
 * @description
 * # weather
 * Service in the metronomeApp.
 */
angular.module('openWeather', [])
  .factory('openWeatherMapfactory', ['$http', 'openWeatherMapSearchDataService', function ($http, openWeatherMapSearchDataService) {
    const openWeatherMapfactory = {};

    console.log('weather factory works!!');

    openWeatherMapfactory.getWeatherFromCitySearchByName = function (_params) {
      let searchData = openWeatherMapSearchDataService.getNew("citySearchByName", _params);
      return $http({
        method: 'GET',
        url: searchData.url,
        params: searchData.object,
      });
    };

    openWeatherMapfactory.getWeatherFromCityById = function (_params) {
      let searchData = openWeatherMapSearchDataService.getNew("cityById", _params);
      return $http({
        method: 'GET',
        url: searchData.url,
        params: searchData.object,
      });
    };

    openWeatherMapfactory.getWeatherFromGroupOfCitiesById = function (_params) {
      let searchData = openWeatherMapSearchDataService.getNew("citiesById", _params);
      return $http({
        method: 'GET',
        url: searchData.url,
        params: searchData.object,
      });
    };

    openWeatherMapfactory.getWeatherFromLocationByCoordinates = function (_params) {
      let searchData = openWeatherMapSearchDataService.getNew("locationByCoordinates", _params);
      return $http({
        method: 'GET',
        url: searchData.url,
        params: searchData.object,
      });
    };

    openWeatherMapfactory.getWeatherFromLocationByZipcode = function (_params) {
      let searchData = openWeatherMapSearchDataService.getNew("locationByZipcode", _params);
      return $http({
        method: 'GET',
        url: searchData.url,
        params: searchData.object,
      });
    };

    openWeatherMapfactory.getForecast5FromCitySearchByName = function (_params) {
      let searchData = openWeatherMapSearchDataService.getNew("cityForecast5SearchByName", _params);
      return $http({
        method: 'GET',
        url: searchData.url,
        params: searchData.object,
      });
    };

    openWeatherMapfactory.getForecast5FromCityById = function (_params) {
      let searchData = openWeatherMapSearchDataService.getNew("cityForecast5ById", _params);
      return $http({
        method: 'GET',
        url: searchData.url,
        params: searchData.object,
      });
    };

    openWeatherMapfactory.getForecast5FromLocationByCoordinates = function (_params) {
      let searchData = openWeatherMapSearchDataService.getNew("locationForecast5ByCoordinates", _params);
      return $http({
        method: 'GET',
        url: searchData.url,
        params: searchData.object,
      });
    };

    return openWeatherMapfactory;
  }])
  .service('openWeatherMapSearchDataService', function () {
    this.getApiBaseUrl = function (_params) {
      return "http://api.openweathermap.org/data/2.5/";
    };

    this.fillDataInObjectByList = function (_object, _params, _list) {
      angular.forEach(_list, function (value, key) {
        if (angular.isDefined(_params[value])) {
          _object.object[value] = _params[value];
        }
      });
      return _object;
    };

    this.getNew = function (_type, _params) {

      let openWeatherMapSearchData = {
        object: {
          appid: _params.appid,
        },
        url: "",
      };

      switch (_type) {
        case "citySearchByName":
          openWeatherMapSearchData = this.fillDataInObjectByList(openWeatherMapSearchData, _params, [
            'q', 'lang', 'type', "units",
          ]);
          openWeatherMapSearchData.url = this.getApiBaseUrl() + "weather";
          break;

        case "cityById":
          openWeatherMapSearchData = this.fillDataInObjectByList(openWeatherMapSearchData, _params, [
            'id', 'lang', "units",
          ]);
          openWeatherMapSearchData.url = this.getApiBaseUrl() + "weather";
          break;

        case "citiesById":
          openWeatherMapSearchData = this.fillDataInObjectByList(openWeatherMapSearchData, _params, [
            'id', 'lang', "units",
          ]);
          openWeatherMapSearchData.url = this.getApiBaseUrl() + "group";
          break;

        case "locationByCoordinates":
          openWeatherMapSearchData = this.fillDataInObjectByList(openWeatherMapSearchData, _params, [
            'lat', 'lon', 'lang', "units",
          ]);
          openWeatherMapSearchData.url = this.getApiBaseUrl() + "weather";
          break;

        case "locationByZipcode":
          openWeatherMapSearchData = this.fillDataInObjectByList(openWeatherMapSearchData, _params, [
            'zip', 'lang', "units",
          ]);
          openWeatherMapSearchData.url = this.getApiBaseUrl() + "weather";
          break;

        case "cityForecast5SearchByName":
          openWeatherMapSearchData = this.fillDataInObjectByList(openWeatherMapSearchData, _params, [
            'q', 'lang', 'type', "units",
          ]);
          openWeatherMapSearchData.url = this.getApiBaseUrl() + "forecast";
          break;

        case "cityForecast5ById":
          openWeatherMapSearchData = this.fillDataInObjectByList(openWeatherMapSearchData, _params, [
            'id', 'lang', "units",
          ]);
          openWeatherMapSearchData.url = this.getApiBaseUrl() + "forecast";
          break;

        case "locationForecast5ByCoordinates":
          openWeatherMapSearchData = this.fillDataInObjectByList(openWeatherMapSearchData, _params, [
            'lat', 'lon', 'lang', "units",
          ]);
          openWeatherMapSearchData.url = this.getApiBaseUrl() + "forecast";
          break;

      }
      return openWeatherMapSearchData;
    };
  });

