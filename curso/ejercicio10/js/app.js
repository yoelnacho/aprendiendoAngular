var app = angular.module('universidadApp', ['ngRoute']);

// Crear un controlador por página que tenga alguna funcionalidad
app.controller('mainCtrl', ['$scope','$http', function($scope,$http) {

    $scope.menuSuperior = "parciales/menu.html";

    // Seteo vacias las variables
    $scope.setActive = function(opcion){
        $scope.mInicio = "";
        $scope.mProfesores = "";
        $scope.mAlumnos = "";

        // la opción que me devuelve la función es la que agrega la clase 'active'
        $scope[opcion] = "active";
    }

    // Go back
    $scope.goBack = function() {
        window.history.back();
    };

}]);
