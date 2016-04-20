(function() {
    // Nueva forma de encapsular
    var app = angular.module('ejemplosApp', []);

    // Agregar las inyecciones, en este caso el $http
    app.controller('mainCtrl', ['$scope','$http', function($scope,$http) {

        //http://www.geoplugin.net/json.gp?jsoncallback=JSON_CALLBACK
        $scope.geo = {};

        // mediante ajax toma los datos del archivo json
        $http.jsonp('http://www.geoplugin.net/json.gp?jsoncallback=JSON_CALLBACK').success(function(data){
            // código cuando es correcta la petición.
            $scope.geo = data;
        })
    }]);
})();
