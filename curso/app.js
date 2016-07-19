(function() {
    // Nueva forma de encapsular
    var app = angular.module('nav', []);

    // Navegación
    app.controller('navCtrl', ['$scope', function($scope) {
        $scope.hola = "hola mundo";

        $scope.navegacionSelected = 1;

        $scope.navegacion = [
            {
                id:1,
                nombre:"Ejercicio 1",
                descripcion: [
                    "Leer los datos de un modelo.",
                    "filtros  uppercase, lowercase y currency"
                ]
            },
            {
                id:2,
                nombre:"Ejercicio 2",
                descripcion: [
                    "Reemplazar datos del modelo desde un controlador.",
                    "Utilización de animate.css para la directiva ng-show",
                    "Utilización de angular.copy, para copiar el estado de una variable a otra"
                ]
            },
            {
                id:3,
                nombre:"Ejercicio 3",
                descripcion: [
                    "Funciones encapsuladas correctamente.",
                    "Cambio de forma al escribir un Ctrl (para evitar errores en la minificación)",
                    "ng-repeat de un arreglo compuesto"
                ]
            },
            {
                id:4,
                nombre:"Ejercicio 4",
                descripcion: [
                    "Filtros para ng-repeat",
                    "Ordenar ng-repeat por orderBy"

                ]
            },
            {
                id:5,
                nombre:"Ejercicio 5",
                descripcion: [
                    "$http",
                    "Leer datos de un .json"
                ]
            },
            {
                id:6,
                nombre:"Ejercicio 6",
                descripcion: [
                    "ng-include"
                ]
            },
            {
                id:7,
                nombre:"Ejercicio 7",
                descripcion: [
                    "Detectando IPs, País, Ciudad y otra información Online"
                ]
            },
            {
                id:8,
                nombre:"Ejercicio 8",
                descripcion: [
                    "API externa, clima mundo",
                    "Funión para convertir K a C",
                    "Incluir una función dentro de un parseo",
                    "utilizando filtro date (fechas/horas)"
                ]
            },
            {
                id:9,
                nombre:"Ejercicio 9",
                descripcion: [
                    "ng-route",
                    "$routeProvider dependencia",
                    "anidando Ctrls",
                    "ng-class"
                ]
            },
            {
                id:10,
                nombre:"Ejercicio 10",
                descripcion: [
                    "Crear un filtro personalizado para teléfono en la pantalla inicio",
                    "Filtro limitTo para limitar la cantidad de data a mostrar",
                    "Filtro limitTo para no mostrar más de 5 registros a la vez",
                    "$routeParams para obtener desde el Ctrl parametros pasados por URL"
                ]
            }

        ];
    }]);

})();
