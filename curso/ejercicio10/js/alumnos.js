app.controller('alumnosCtrl', ['$scope','$http', function($scope,$http){

    // paso a la funión setActive la 'opcion' para asignar la clase 'active'
    $scope.setActive("mAlumnos");

    $scope.alumnos = {};
    $scope.paginacion = 5;

    $http.get('json/alumnos.json').success(function(data){
        // concatenar a data el array a devolver
        $scope.alumnos = data.alumnos;
    })

    $scope.siguiente = function() {
        // Mientras la cantidad de registros en $scope.alumnos (contados con length)
        // sea mayor a $scope.paginacion
        if ( $scope.alumnos.length > $scope.paginacion ){
            // sumarle 5 registros más a paginación
            // va a llegar un momento que el número de $scope.paginacion
            // es mayor al length de $scope.alumnos
            $scope.paginacion += 5;
        }
    }

    $scope.anterior = function() {
        // Mientras la cantidad de $scope.paginacion sea mayor a 5
        // le va a ir restando a $scope.paginacion 5 hasta llegar al valor inicial
        if ( $scope.paginacion > 5  ){
            $scope.paginacion -= 5;
        }
    }

}]);
