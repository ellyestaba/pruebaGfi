'use strict';

angular.module('myApp.controllers', [])
  .controller('MoviesListCtrl', ['$scope', '$localStorage', 'rtmFactory',
    function ($scope, $localStorage, rtmFactory) {

      $scope.loadMovies = function (page) {

        rtmFactory.getMovies(page).then(
          function (response) {
            // console.log(response);
            var moviesArray = response.Search;
            // console.log(moviesArray)
            $scope.movies = moviesArray;
            var total = Math.ceil(parseInt(response.totalResults) / 10);
            
            $scope.pages = []
            for (let i = 1; i < total; i++) {
              $scope.pages.push(i);
            }
            
          },
          function (response) {
            console.log(response);
          }
        )
      };
     
       $scope.loadMovies(1);

      $scope.moviesDetail = function (id) {

        rtmFactory.getbyId(id).then(
          function (response) {
            $scope.details = response;
          },
          function (response) {
            console.log(response.Error);
          }
        )
      };

      $scope.buscarPor = function (title, year) {

        rtmFactory.getByParametro(title, year).then(
          function (response) {
            // console.log(response)
            $scope.details = response;
          },
          function (response) {
            console.log(response);
          }
        )
      };

      $scope.fav = function (movie) {
       
        if ($localStorage.fav === undefined) {
          $localStorage.fav = [movie];
        } else {
          var arrayFav = $localStorage.fav;
          if (arrayFav.find(m => m.Title === movie.Title) === undefined) {
            arrayFav.push(movie);
            $localStorage.fav = arrayFav;
          } else {
            alert("Esta pelicula ya esta en tu lista de Favoritos")
          }
        }
      };

      $scope.favMovies = $localStorage.fav;


    }
  ])



