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
        // paso el nombre del parámetro es el mismo que indico en el href
        .when("/alumno/:id",{
            templateUrl: "parciales/alumno.html",
            controller: 'alumnoCtrl'
        })
        .when("/post/:id",{
            templateUrl: "parciales/blog.html",
            controller: 'alumnoCtrl'
        })
        .otherwise({
            redirecTo: "/"
        })

});
