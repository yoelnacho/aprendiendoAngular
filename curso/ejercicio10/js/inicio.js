app.controller('inicioCtrl', ['$scope', function($scope){

    // paso a la funión setActive la 'opcion' para asignar la clase 'active'
    $scope.setActive("mInicio");

}]);


// Filtro personalizado de teléfono
app.filter('telefono', function(){
    return function(numero){
        // va a cortar al número del 0 al 4 caracter,
        // le agrega un - y luego muestra del 4º caracter en adelante
        return numero.substring(0,4) + "-"+numero.substring(4);
    }
});
