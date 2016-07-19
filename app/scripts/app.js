(function() {
    var app = angular.module('MyApp', ['ngRoute','ngStorage']);

    app.config(function($routeProvider, $locationProvider) {

        $routeProvider
            .when('/', {
                templateUrl : 'app/views/login.tpl.html',
                controller  : 'TodoCtrl',
                controllerAs: 'vm'
            })
            .when('/list', {
                title: 'Crear',
                templateUrl : 'app/views/list.tpl.html',
                controller  : 'mainController'
            })
            .when('/add', {
                title: 'Crear',
                templateUrl : 'app/views/add.tpl.html',
                controller  : 'addController'
            })
            .when('/delete', {
                title: 'Eliminar',
                templateUrl : 'app/views/delete.tpl.html',
                controller  : 'deleteController'
            })
            .when('/flags', {
                title: 'Flags',
                templateUrl : 'app/views/flags.tpl.html',
                controller  : 'flagsController'
            })
            .otherwise({
                redirectTo: '/'
        });

        // use the HTML5 History API
        //$locationProvider.html5Mode(true);

    });

    // Service
    app.service('Flags',function($http){

        this.getAll = function(success,failure){
            $http.get('https://restcountries.eu/rest/v1/') //Step 1
                .success(success) //Step 2
                .error(failure);
        }
    })

    // Controller
    app.controller('MainController', function($scope, $location, Flags) {
        $scope.saludo = "Hola desde el controlador home";

        Flags.getAll(function(data){
            $scope.countries = data
        });

    	$scope.toLogin = function(){
    		$location.url("/");
    	}
    })

    app.controller('LoginCtrl', function($scope, $location, $localStorage) {

        $scope.saludo = "Ctrl Login done";
        // $scope.login = [
        //     {
        //         id:1,
        //         nombre:"Ignacio",
        //         password: 123
        //     },
        //     {
        //         id:2,
        //         nombre:"Ignacio2",
        //         password: 456
        //     }
        // ];


        $scope.save = function(getForm){
            $scope.todos.push(getForm);
            // $scope.$storage = $localStorage.$default($scope.todos);
        }

        $scope.delete = function(){
            delete $localStorage.todo;
        }
    });

    app.controller('TodoCtrl', function($scope, $location, $localStorage) {
        var vm = this;

        vm.saludo = "Controlador para ToDo List";
        vm.todos = [];

        vm.addTodo = function() {
            vm.todos.push({text: vm.todoText, done:false});
            vm.$storage = $localStorage.$default(vm.todos);
            vm.todoText = '';
        };


        vm.delete = function(){
            delete $localStorage;
        };

        vm.$storage = $localStorage.$default(vm.todos);
    })

})();
