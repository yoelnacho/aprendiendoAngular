var app = angular.module('universidadApp', ['ngRoute']);

// Service
app.service('Blog',function($http){

    this.getAll = function(success,failure){
        $http.get('http://jsonplaceholder.typicode.com/posts/') //Step 1
            .success(success) //Step 2
            .error(failure);
    }
})

// Crear un controlador por página que tenga alguna funcionalidad
app.controller('mainCtrl', ['$scope','$http','Blog', function($scope,$http,Blog) {

    $scope.menuSuperior = "parciales/menu.html";

    // Seteo vacias las variables
    $scope.setActive = function(opcion){
        $scope.mInicio = "";
        $scope.mProfesores = "";
        $scope.mAlumnos = "";

        // la opción que me devuelve la función es la que agrega la clase 'active'
        $scope[opcion] = "active";
    }

    // Blog.getAll(function(data){
    //     $scope.prueba = data;
    // });

    // Go back
    $scope.goBack = function() {
        window.history.back();
    };

}]);
