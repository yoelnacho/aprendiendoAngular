var app = angular.module('app', []);

app.config(function($routeProvider){
    $routeProvider.when("/",{
        templateUrl: "index.html"
    })
    .when('/info/:id', {
        templateUrl: "info.html",
        controller: "view/editController"
    })
    .when('/add', {
        templateUrl: "add.html",
        controller: "view/addController"
    })
    .when('/edit/:id', {
        templateUrl: "edit.html",
        controller: "view/editController"
    })
    .when('/remove/:id', {
        templateUrl: "remove.html",
        controller: "view/removeController"
    })
    .otherwise({
        redirecTo: "/"
    })
})
