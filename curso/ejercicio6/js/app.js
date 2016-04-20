(function() {
    // Nueva forma de encapsular
    var app = angular.module('ejemplosApp', []);

    // Agregar las inyecciones, en este caso el $http
    app.controller('mainCtrl', ['$scope','$http', function($scope,$http) {

        // Arreglo vacío
        $scope.profesores = {};
        $scope.tablaProfesores = "parciales/tablaProfesores.html";

        // mediante ajax toma los datos del archivo json
        $http.get('json/profesores.json').success(function(data){
            // código cuando es correcta la petición.
            $scope.profesores = data.profesores;
        })
    }]);
})();
