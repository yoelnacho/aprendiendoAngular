(function(){
    // Nueva forma de encapsular
    var app = angular.module('universidadApp',[]);

    app.controller('listadoCtrl', ['$scope', function($scope){
        // arreglo de listadoCtrl
        $scope.listado = ["Fernando", "Melissa", "Jorge"];
        $scope.listadoProfesores = {
            profesores: [
                {
                    nombre: "Fernando Arguello",
                    edad: 29,
                    clase: "Matemáticas"
                },
                {
                    nombre: "Luciano Arguello",
                    edad: 19,
                    clase: "Geografía"
                },
                {
                    nombre: "Ignacio Arguello",
                    edad: 35,
                    clase: "Literatura"
                }
            ]
        }
    }]);
})();
