// module
var app = angular.module("app", [

]);

// Navegación
app.controller("NavController", function($scope) {
    $scope.nav = "home";
});

// controlador
function MiController($scope) {
    $scope.message = "Hola Mundo";

    // Cambiar el estado de una variable dentro del mismo $scope con el evento 'ng-click'
    $scope.cambiarMensaje = function() {
        $scope.message = "Adios mundo cruel :-)";
    }
}

// Es otra forma de añadir el controlador al módulo, en este caso el módulo se llama 'app'

/*
Todos los controladores que usemos en nuestra aplicación deben siempre definirse dentro de un módulo
y no como funciones sueltas. Es importante ya que a partir de la versión 1.3 de AngularJS no funcionarán
los controladores que no estén dentro de un módulo.
*/

// $log es el servicio de angular 'console.log()'

/*
Improvement: al minimizar el javascrip $scope y $log pasan a tener otros nombres
ej: function(a,b), esto hace perder el servicio y el scope.
Al inyectar objetos en el controlador (o cualquier otra función en la que AngularJS inyecte valores,
recuerda siempre pasar un array con el nombre de lo que hay que inyectar y como último parámetro la función,
en vez de pasar únicamente la función.
*/
//app.controller("PersonalController", function($scope,$log) {
app.controller("PersonalController", ['$scope','$log',function($scope,$log) {
    $scope.personal = {
        nombre: "nacho",
        apellido: "",
        apodo: "",
        sexo: "",
        number: 0,
        dia: {
            lunes: false,
            martes: false,
            miercoles: false,
            jueves: false,
            viernes: false,
        },
        fechaCreacion: new Date()
    }

    // console.log ahora se puede reemplazar utilizando el servicio de angular $log, para que funcione hay que pasarlo como atributo en el controlador, así como se hace con el $scope.
    $log.debug($scope.personal.fechaCreacion);
}]);
