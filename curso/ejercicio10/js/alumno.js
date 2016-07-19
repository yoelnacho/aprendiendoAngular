// para obtener los parámetros que se pasan por URL, en este caso el id
app.controller('alumnoCtrl', ['$scope','$routeParams','$http', function($scope,$routeParams,$http){

    // $scope.idPage = $routeParams.id;
    // $scope.title = $routeParams.title;

    // Guardo en codigo el id que tomo con routeParams y viene por GET
    var codigo = $routeParams.id;

    // Creo el arreglo post vacío
    $scope.post = {};

    // Busco el registro del dato mediante al id que está en la var codigo
    $http.get('http://jsonplaceholder.typicode.com/posts/'+ codigo).success(function(data){
        // si hay un error (ya que los datos vienen por GET y se pueden modificar en la URL)
        // redirijo la ventana a profesores (o cualquier otra)
        if(data.err !== undefined){
            window.location = "#/profesores";
            return;
        }

        // Guardo los datos del registro elegido en post
        $scope.post = data;
    })


}]);
