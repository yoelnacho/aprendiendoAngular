app.controller('mainController', function($scope, $location) {
    $scope.saludo = "Hola desde el controlador home";

	$scope.toLogin = function(){
		$location.url("/login");
	}
});
