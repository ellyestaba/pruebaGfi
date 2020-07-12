'use strict';


angular.module('myApp.services', []).
  value('version', '0.1')
  .constant('API_KEY', 'f12ba140')

  .factory('rtmFactory', ['$http', 'API_KEY', function ($http, API_KEY) {
    return {
      
      getMovies: function (page) {
        var promise = $http.get('http://www.omdbapi.com/?apikey='+API_KEY+'&s=the%20a&y=2019&page='+page+'&plot=full').then(function (response) {
          return response.data;
        }, function (error) {
          console.log(error);
        })
        return promise;
      },

      getbyId: function (id) {
        var promise = $http.get('http://www.omdbapi.com/?i='+id+'&plot=full&apikey=f12ba140').then(function (response) {
          return response.data;
        }, function (error) {
          console.log(error);
        })
        return promise;
      },

      getByParametro: function (title) {
        var promise = $http.get('http://www.omdbapi.com/?t='+title+'&apikey=f12ba140').then(function (response) {
          return response.data;
        }, function (error) {
          console.log(error);
        })
        return promise;
      },
    }
  }]);