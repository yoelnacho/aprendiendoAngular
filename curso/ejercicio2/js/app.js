var app = angular.module('universidadApp', []);

// los controladores tienen que estar encapsulados
// ejemplo el ctrl profesor maneja profesores
// el ctrl de alumnos sobre alumnos, etc
app.controller('profesorCtrl', function($scope){
    // indicando el $scope, profesor va a ser una propiedad del scope general
    $scope.profesor = profesorData;
    $scope.editando = {};

    // Para mostrar u ocultar la caja de edición
    $scope.mostrarCaja = false;

    // Definimos una function
    $scope.EditarProfesor = function(){
        // copiamos el $scope.profesor y lo asignamos a una variable
        angular.copy($scope.profesor, $scope.editando);
        $scope.mostrarCaja = true;
    }

    // Guardar cambios
    $scope.GuardarCambios = function(){
        // copio lo que está en el form $scope.editando y lo asigno a la variable profesor
        angular.copy($scope.editando, $scope.profesor);
        $scope.mostrarCaja = false;
    }

    // Cancelar cambios
    $scope.CancelarCambios = function(){
        // limpio la variable
        angular.copy($scope.profesor, $scope.editando);
        $scope.mostrarCaja = false;
    }

});

var profesorData = {
    nombre: "Juan Carlos Pineda",
    bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi libero, a. Temporibus veniam sed incidunt hic facilis consectetur omnis sunt error, commodi porro, accusamus explicabo eos, aliquid est laborum asperiores?",
    edad: 47,
    foto: "img/profesor.jpg"
}
