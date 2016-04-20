(function(){
    "use strict";

    angular
        .module('MyApp',['ngRoute']);

    .config($routeProvider) {

        $routeProvider.when('/', {
            templateUrl : 'app/views/flags.tpl.html',
            controller  : 'MainController'
        })
    }

    // Service
    .service('Flags',function($http){

        this.getAll = function(success,failure){
            $http.get('https://restcountries.eu/rest/v1/name/') //Step 1
                .success(success) //Step 2
                .error(failure);
        }
    })

    // Controller
    .controller('MainController', function($scope, $location, Flags) {
        $scope.saludo = "Hola desde el controlador home";

        Flags.getAll(function(data){
            $scope.countries = data
        });

    	$scope.toLogin = function(){
    		$location.url("/");
    	}
    })

    // Config
    // function appConfig ($routeProvider) {
    //
    //     $routeProvider
    //         .when('/', {
    //             templateUrl : 'app/views/home.tpl.html',
    //             controller  : 'mainController'
    //         })
    //         .when('/list', {
    //             title: 'Crear',
    //             templateUrl : 'app/views/list.tpl.html',
    //             controller  : 'mainController'
    //         })
    //         .when('/add', {
    //             title: 'Crear',
    //             templateUrl : 'app/views/add.tpl.html',
    //             controller  : 'addController'
    //         })
    //         .when('/delete', {
    //             title: 'Eliminar',
    //             templateUrl : 'app/views/delete.tpl.html',
    //             controller  : 'deleteController'
    //         })
    //         .when('/flags', {
    //             title: 'Flags',
    //             templateUrl : 'app/views/flags.tpl.html',
    //             controller  : 'flagsController'
    //         })
    //         .otherwise({
    //             redirectTo: '/'
    //     });
    //
    //     // use the HTML5 History API
    //     $locationProvider.html5Mode(true);
    //
    // }
})();
