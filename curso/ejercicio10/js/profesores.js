app.controller('profesoresCtrl', ['$scope','$http', function($scope,$http){

    // paso a la funión setActive la 'opcion' para asignar la clase 'active'
    $scope.setActive("mProfesores");

    // API Rest
    $http.get('http://jsonplaceholder.typicode.com/posts/').success(function(data){
        // concatenar a data el array a devolver
        $scope.posts = data;
    });

}]);
