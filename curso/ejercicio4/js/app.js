(function() {
    // Nueva forma de encapsular
    var app = angular.module('universidadApp', []);

    app.controller('listadoCtrl', ['$scope', function($scope) {
        // arreglo de personas
        $scope.personas = [{
            "id": 0,
            "sexo": "hombre",
            "nombre": "Kari Carr",
            "avatar": "kari.jpg",
            "telefono": "(826) 453-3497",
            "celular": "91758136"
        }, {
            "id": 1,
            "sexo": "mujer",
            "nombre": "Tameka Gamble",
            "avatar": "tameka.jpg",
            "telefono": "(824) 438-2499",
            "celular": "85958337"
        }, {
            "id": 2,
            "sexo": "mujer",
            "nombre": "Charity Austin",
            "avatar": "charity.jpg",
            "telefono": "(817) 512-2258",
            "celular": "93753830"
        }, {
            "id": 3,
            "sexo": "mujer",
            "nombre": "Slater Hunt",
            "avatar": "slater.jpg",
            "telefono": "(842) 413-3023",
            "celular": "95551729"
        }, {
            "id": 4,
            "sexo": "mujer",
            "nombre": "Chen Hanson",
            "avatar": "chen.jpg",
            "telefono": "(966) 520-2696",
            "celular": "93244423"
        }, {
            "id": 5,
            "sexo": "hombre",
            "nombre": "Obrien Davis",
            "avatar": "obrien.jpg",
            "telefono": "(996) 595-3896",
            "celular": "81952732"
        }, {
            "id": 6,
            "sexo": "hombre",
            "nombre": "Le Haley",
            "avatar": "le.jpg",
            "telefono": "(967) 527-3286",
            "celular": "80745225"
        }, {
            "id": 7,
            "sexo": "hombre",
            "nombre": "Lester Carney",
            "avatar": "lester.jpg",
            "telefono": "(994) 465-3542",
            "celular": "90447522"
        }, {
            "id": 8,
            "sexo": "hombre",
            "nombre": "Rosario Perry",
            "avatar": "rosario.jpg",
            "telefono": "(848) 499-2977",
            "celular": "84950625"
        }, {
            "id": 9,
            "sexo": "mujer",
            "nombre": "Marilyn Huber",
            "avatar": "marilyn.jpg",
            "telefono": "(982) 580-3235",
            "celular": "81842624"
        }];

    }]);
})();
