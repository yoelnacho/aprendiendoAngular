// para obtener los parámetros que se pasan por URL, en este caso el id
app.controller('alumnoCtrl', ['$scope','$routeParams', function($scope,$routeParams){

    $scope.idPage = $routeParams.id;

}]);
