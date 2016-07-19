(function(){
    "use strict";

    angular.module('Bookmarks',[
        //dependencies here
    ])

    .controller('MainController',function($scope){
        $scope.name = 'Carl'
        $scope.categories = ['HTML5','JavaScript','CSS','Games'];
        $scope.bookmarks = [
            {id:1,title:'Quizzpot.com',url:'https://quizzpot.com',category:'JavaScript'},
            {id:2,title:'Html5 Game Devs',url:'https://html5gamedevs.com',category:'Games'},
            {id:3,title:'CSS Tricks',url:'http://css-tricks.com',category:'CSS'},
            {id:4,title:'Bootstrap',url:'http://getbootstrap.com',category:'CSS'},
            {id:5,title:'Card',url:'http://jessepollak.github.io/card/',category:'JavaScript'}
        ];

        $scope.currentCategory = 'JavaScript';

        $scope.setCurrentCategory = function(category){
            $scope.currentCategory = category;
        };

        $scope.isCurrentCategory = function(category){
            return $scope.currentCategory === category;
        };


        // EDIT
        // mostrar ventanda, arreglo bookmark para editar o crear uno vacío
        $scope.showWindow = function(arregloQueVieneDelForm){
            // limpiar el formulario para validaciones si se hizo focus, etc
            // utilizando los métodos $setPristine() y $setUntouched()
            $scope.bookmarkForm.$setPristine(); // cambia el estado de formulario como limpio (contrario a $dirty)
            $scope.bookmarkForm.$setUntouched(); // cambia el $touched como UnTouched

            arregloQueVieneDelForm = arregloQueVieneDelForm || {category:$scope.currentCategory, url:''};
            $scope.bookmark = arregloQueVieneDelForm;
            // Abrimos el modal con id bookmarkModal (no es correcto desde el controller sino desde una directiva)
            $("#bookmarkModal").modal("show");
        };


        // SAVE
        // guardar arreglo bookmark haciendo click en botón save
        $scope.save = function(arregloQueVieneDelForm){
            // primero verificar que el form esté válido
            if($scope.bookmarkForm.$valid){
                // primero identificar que no tiene un identificador id
                // para saber si es un bookmark nuevo
                if(!arregloQueVieneDelForm.id){
                    // clonar el registro bookmark, para evitar una referencia
                    var record = angular.copy(arregloQueVieneDelForm);

                    // Se le agrega un id (con el número que dá el total de bookmarks)
                    record.id = $scope.bookmarks.length;
                    // se agrega el nuevo record al arreglo de bookmark
                    $scope.bookmarks.push(record);
                }
            }
            $("#bookmarkModal").modal("hide");
        };

        // DELETE
        // este método recibe el identificador de lo que voy a borrar
        $scope.remove = function(id){
            // busco el elemento en la lista de bookmarks iterando de la
            // posición 0 a la última
            for(var i=0, len=$scope.bookmarks.length; i<len; i++){
                // si el elemento coincide con el identificador
                if($scope.bookmarks[i].id === id){
                    // Elimina 1 elemento en la posición i
                    $scope.bookmarks.splice(i,1);
                    // termina el ciclo del for ya que se borró el elemento
                    break;
                }
            }
        };

    });

})();
