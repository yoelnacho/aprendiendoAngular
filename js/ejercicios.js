// module
var app = angular.module("app", [

]);

// Navegación
app.controller("NavController", function($scope) {
    $scope.nav = "http"; // Se inicializa

    console.log($scope.nav);
});

// controlador
function MiController($scope) {
    $scope.message = "Hola Mundo";

    // Cambiar el estado de una variable dentro del mismo $scope con el evento 'ng-click'
    $scope.cambiarMensaje = function() {
        $scope.message = "Adios mundo cruel :-)";
    }
}

/*
Todos los controladores que usemos en nuestra aplicación deben siempre definirse dentro de un módulo
y no como funciones sueltas. Es importante ya que a partir de la versión 1.3 de AngularJS no funcionarán
los controladores que no estén dentro de un módulo.
*/
// Es otra forma de añadir el controlador al módulo, en este caso el módulo se llama 'app'
app.controller("MyPersonalController", function($scope,$log) {
    $scope.myPerson = "yo";

    console.log($scope.myPerson);
});

/*
Improvement: al minimizar el javascrip $scope y $log pasan a tener otros nombres
ej: function(a,b), esto hace perder el servicio y el scope.
Al inyectar objetos en el controlador (o cualquier otra función en la que AngularJS inyecte valores,
recuerda siempre pasar un array con el nombre de lo que hay que inyectar y como último parámetro la función,
en vez de pasar únicamente la función.
*/
// $log es el servicio de angular 'console.log()'
app.controller("PersonalController", ['$scope','$log',function($scope,$log) {
    $scope.personal = {
        nombre: "nacho",
        apellido: "",
        apodo: "",
        sexo: "",
        number: 0,
        dia: {
            lunes: false,
            martes: false,
            miercoles: false,
            jueves: false,
            viernes: false,
        },
        fechaCreacion: new Date()
    }

    /* console.log ahora se puede reemplazar utilizando el servicio de angular $log,
    para que funcione hay que pasarlo como atributo en el controlador,
    así como se hace con el $scope. */

    //$log.debug($scope.personal.fechaCreacion);
}]);

/*
tomando datos desde un .json con el servicio $http
$http acepta como parámetro un único objeto llamado config con todas las
propiedades que necesita para la petición.
El $http debería estar dentro de un servicio y que dicho servicio se llamara desde el controlador. 
CONFIG:
    method: El método HTTP para hacer la petición. Sus posibles valores son: GET, POST, PUT, DELETE, etc.
    url: La URL de donde queremos obtener los datos.
    data: Si usamos el método POST o PUT aquí pondremos los datos a mandar en el body de la petición HTTP
    params: Un objeto que se pondrá como parámetros de la URL.
SUCCESS:
    data: Un objeto JavaScript correspondiente a los datos JSON que ha recibido
    status: Es el estado HTTP que ha retornado. Su valor siempre será entre 200 y 299 ya que si se llama a esta función significa que la petición ha tenido éxito.
    headers:Es una función que acepta como único parámetro el nombre de una cabecera HTTP y nos responde su valor.
    config: El mismo objeto config que usamos para configurar la petición.
*/
app.controller("PersonalDataController", ['$scope','$log','$http',function($scope,$log,$http) {
    // Conf
    var config = {
        method:"GET",
        url:"data/datos.json"
    }

    // Respuesta llamando al servicio http, la respuesta es un objeto 'promise'
    var response = $http(config);

    // Success
    response.success(function(data, status, headers, config) {
        $scope.myData = data;
    });

    // Error
    response.error(function(data, status, headers, config) {
        $log.debug("Ha fallado la petición. Estado HTTP:" + status);
    });

    /* Lo mismo pero resumido */
    /*
    $http({
        method: 'GET',
        url: 'datos.json'
    }).success(function(data, status, headers, config) {
        $scope.myData = data;
    }).error(function(data, status, headers, config) {
        $log.debug("Ha fallado la petición. Estado HTTP:" + status);
    });
    */

}]);
