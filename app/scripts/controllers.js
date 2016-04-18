app.controller('mainController', function($scope, $location) {
    $scope.saludo = "Hola desde el controlador home";

	$scope.toLogin = function(){
		$location.url("/");
	}
});

app.controller('flagsController', function($scope, $http) {
    var urlCountries = 'https://restcountries.eu/rest/v1/name/';

    $scope.nameCountry = "";

    $scope.loadCountries = function(){
        // $http.get(urlCountries + $scope.regionCode)
        // .success(function(countryList){
        //     console.log(countryList);
        // }
        //hacemos uso de $http para obtener los datos del json
        $http.get(urlCountries + $scope.nameCountry).success(function (data) {
            //Convert data to array.
            //datos lo tenemos disponible en la vista gracias a $scope
            $scope.countries = data;
        });
    }

});
