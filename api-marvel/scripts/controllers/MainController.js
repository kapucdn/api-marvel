app.controller('MainController', ['$scope', 'marvelApi','MyService', '$rootScope',  function($scope, marvelApi, MyService, $rootScope) { 
  //  marvel.success(function(data) { 
  //     $scope.marvel = data; 
  //   });

    $scope.pesquisar = function(nomePesquisar){
      console.log("chamei service:__" + nomePesquisar);

      if(nomePesquisar == "" || nomePesquisar == undefined){
        $scope.erroNome = true;
        return;
      }else{
        $scope.erroNome = false;
      }
      
      if($scope.erroNome == false){
        MyService.fighters(nomePesquisar).then(function(data){
          $scope.marvel = {};
          console.log("Data:__", data);
          $scope.marvel = data;
          $rootScope.testando = data;
          if($rootScope.testando.data.data.results == 0 || $scope.marvel.testando == []){
            $scope.erroLista = true;
          }else{
            $scope.erroLista = false;
          }
          console.log("$scope.marvel:__" , $scope.marvel);
          $scope.nomePesquisar = "";
         });
      }
    }
}]);