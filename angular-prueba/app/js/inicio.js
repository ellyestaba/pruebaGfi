'use strict';

angular.module('myApp.inicio', [])
.controller('InicioCtrl',
    ['$scope', '$rootScope', '$location', 'inicioSesion', 
    function ($scope, $rootScope, $location, inicioSesion) {
        // reset login status
        inicioSesion.ClearCredentials();
 
        $scope.login = function () {
            $scope.dataLoading = true;
            inicioSesion.Login($scope.username, $scope.password, function(response) {
                if(response.success) {
                  inicioSesion.SetCredentials($scope.username, $scope.password); 
                    $location.path('/movies');
                } else {
                    $scope.error = response.message;
                    $scope.dataLoading = false;
                }
            });
        };
    }]);