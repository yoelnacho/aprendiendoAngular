app.config(function($routeProvider){

    // Por cada página se asigna un controlador
    $routeProvider
        .when("/",{
            templateUrl: "parciales/home.html",
            controller: 'inicioCtrl'
        })
        .when("/profesores",{
            templateUrl: "parciales/profesores.html",
            controller: 'profesoresCtrl'
        })
        .when("/alumnos",{
            templateUrl: "parciales/alumnos.html",
            controller: 'alumnosCtrl'
        })
        .otherwise({
            redirecTo: "/"
        })

});
