'use strict';

// ngstorage#0.3.11
// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngStorage',
  'ngAnimate',
  'ngResource',
  'ngCookies',
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers',
  'myApp.inicio',
  'myApp.inicioSesion'
]).

  config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['Authorization'];
    $routeProvider
      .when('/', {
        templateUrl: 'views/inicio.html',
        controller: 'InicioCtrl'
      })

      .when('/movies', {
        templateUrl: 'views/movies-list.html',
        controller: 'MoviesListCtrl'
      })

      .when('/favoritos', {
        templateUrl: 'views/fav-list.html',
        controller: 'MoviesListCtrl'
      })

      .otherwise({ redirectTo: '/' });
  }])

  .run(['$rootScope', '$location', '$cookieStore', '$http',
    function ($rootScope, $location, $cookieStore, $http) {
      // keep user logged in after page refresh
      $rootScope.globals = $cookieStore.get('globals') || {};
      if ($rootScope.globals.currentUser) {
        // $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
        // // }; // jshint ignore:line
      }
      $rootScope.$on('$locationChangeStart', function (event, next, current) {
        // redirect to login page if not logged in
        if ($location.path() !== '/' && !$rootScope.globals.currentUser) {
          $location.path('/');
        }
      });
    }]);