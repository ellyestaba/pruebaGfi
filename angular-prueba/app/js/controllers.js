'use strict';

angular.module('myApp.controllers', [])
  .controller('MoviesListCtrl', ['$scope', 'rtmFactory',
  function($scope, rtmFactory) {
      // $scope.countries = rtmFactory.getCountries();

      $scope.loadMovies = function() {

        // rtmFactory.getMovies().then(
        //   function(response) {
        //     console.log(response);
        //     var moviesArray = response.data.movies;
        //     console.log(moviesArray)
        //     $scope.movies = moviesArray;

        //   },
        //   function(response){
        //     console.log("Error with moviesArray")
        //   }
        // )   
      };

      // $scope.loadMovies();

      $scope.movies = null;

      rtmFactory.get().then(function(response)
      {
        console.log(response);
         $scope.movies = response.Search;
      });
  }
])


  
