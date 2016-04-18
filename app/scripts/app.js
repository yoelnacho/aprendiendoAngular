var app = angular.module('MyApp', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {

    //$locationProvider.html5Mode(true);

    $routeProvider
        .when('/', {
            templateUrl : 'app/views/home.tpl.html',
            controller  : 'mainController'
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
        .otherwise({
            redirectTo: '/'
    });

    // use the HTML5 History API
    $locationProvider.html5Mode(true);
});
