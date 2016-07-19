(function() {
    // Nueva forma de encapsular
    var app = angular.module('nav', []);

    // Navegación
    app.controller('navCtrl', ['$scope', function($scope) {
        $scope.hola = "hola mundo";

        $scope.navecacionSelected = 1;

        $scope.navegacion = [
            {
                id: "01",
                nombre:"empty",
                descripcion: [
                    "empty"
                ]
            },{
                id: "02",
                nombre:"empty",
                descripcion: [
                    "empty"
                ]
            },{
                id: "03",
                nombre:"empty",
                descripcion: [
                    "empty"
                ]
            },{
                id: "04",
                nombre:"empty",
                descripcion: [
                    "empty"
                ]
            },{
                id: "05",
                nombre:"empty",
                descripcion: [
                    "empty"
                ]
            },{
                id: "06",
                nombre:"empty",
                descripcion: [
                    "empty"
                ]
            },
            {
                id: "07",
                nombre:"forms",
                descripcion: [
                    "Obtener datos de un formulario",
                    "Validar campos utilizando required o ng-required",
                    "Utilizar $invalid, $dirty, $touched para detectar estados"
                ]
            },
            {
                id: "08",
                nombre:"crud",
                descripcion: [
                    "crear, editar y borrar registros",
                    "Two-Way Databinding"
                ]
            },
            {
                id: "09",
                nombre:"empty",
                descripcion: [
                    "empty"
                ]
            },
            {
                id: "10",
                nombre:"empty",
                descripcion: [
                    "empty"
                ]
            }

        ];
    }]);

})();
