'use strict';

// ngstorage#0.3.11
// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngStorage',
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {templateUrl: 'partials/movies-list.html', controller: 'MoviesListCtrl'});
  $routeProvider.when('/favoritos', {templateUrl: 'partials/fav-list.html', controller: 'MoviesListCtrl'});
  $routeProvider.otherwise({redirectTo: '/'});
}]);
