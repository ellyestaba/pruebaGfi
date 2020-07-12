'use strict';


angular.module('myApp.services', []).
  value('version', '0.1')
  .constant('API_KEY', 'f12ba140')

  .factory('rtmFactory', ['$http', 'API_KEY', function ($http, API_KEY) {
    var countries = [
      { name: 'España', code: 'ES' },
      { name: 'Francia', code: 'Fr' },
      { name: 'Estados Unidos', code: 'USA' }
    ];
    return {
      // getCountries: function () {
      //   return countries;
      // },

      getMovies: function () {
        return $http.jsonp('http://www.omdbapi.com/?callback&apikey=f12ba140')
      },

      get: function () {
        var promise = $http.get('http://www.omdbapi.com/?apikey=2db6bc8a&s=the%20a&y=2020&page=1&plot=full').then(function (response) {
          return response.data;
        }, function (error) {
          console.log(error);
        })
        return promise;
      },

      // getbyParametro: function (title, year , type) {
      //   var promise = $http.get('http://www.omdbapi.com/?apikey=2db6bc8a&s=the%20a&y=2020&page=1&plot=full').then(function (response) {
      //     return response.data;
      //   }, function (error) {
      //     console.log(error);
      //   })
      //   return promise;
      // },

      // getbyId: function (id) {
      //   var promise = $http.get('http://www.omdbapi.com/?apikey=2db6bc8a&s=the%20a&y=2020&page=1&plot=full').then(function (response) {
      //     return response.data;
      //   }, function (error) {
      //     console.log(error);
      //   })
      //   return promise;
      // }

    }
  }]);