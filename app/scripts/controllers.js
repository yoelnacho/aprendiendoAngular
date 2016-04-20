app.controller('mainController', function($scope, $location) {
    $scope.saludo = "Hola desde el controlador home";

	$scope.toLogin = function(){
		$location.url("/");
	}
});

// Estas peticiones tienen que estar dentro de un sericio
// Video ejemplo: https://quizzpot.com/courses/introduccion-a-angular-js/articles/definicion-de-servicios-para-hacer-ajax
app.controller('flagsController', function($scope, $http) {
    var urlCountries = 'https://restcountries.eu/rest/v1/name/';
    var urlOpenWeather = 'http://api.openweathermap.org/data/2.5/weather?q=';
    // Video tutorial -> https://youtu.be/diaCDrTQN5M?t=12m16s
    $scope.nameCountry = null;

    $scope.loadCountries = function(){
        //hacemos uso de $http para obtener los datos del json
        $http.get(urlCountries + $scope.nameCountry).success(function (data) {
            //Convert data to array.
            //datos lo tenemos disponible en la vista gracias a $scope
            $scope.countries = data;
            // Sobre los datos que me devuelve la primera petición a una api REST,
            // puedo recorrer el o los paises que me devuelve, para hacer una nueva
            // petición a otra api del clima. Esta me devuelve el estado del tiempo.

        });
    }

});
