(function() {
    // Nueva forma de encapsular
    var app = angular.module('ejemplosApp', []);

    // Agregar las inyecciones, en este caso el $http
    app.controller('mainCtrl', ['$scope','$http', function($scope,$http) {

        //http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&callback=JSON_CALLBACK&appid=9f50a805aa0089a1edd1829a5db029f0
        $scope.clima = {};

        // mediante ajax toma los datos del archivo json
        $http.jsonp('http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&callback=JSON_CALLBACK&appid=9f50a805aa0089a1edd1829a5db029f0').success(function(data){
            // código cuando es correcta la petición.
            $scope.clima = data;
        });

        // Función para pasar grados K a C
        $scope.kelvinCelcius = function(k){
            c = k - 273,15;
            c = Math.round(c*100) / 100; // evitar decimales

            return c;
        }
    }]);
})();
