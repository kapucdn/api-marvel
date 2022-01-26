app.controller('PersonagemController', ['$scope', 'marvelApi', 'MyService', '$routeParams', '$rootScope',
  function ($scope, marvelApi, MyService, $routeParams, $rootScope) {
  $scope.dadosPersonagem = angular.copy($rootScope.testando.data.data.results[0]);
  console.log("$scope.dadosPersonagem:__" , $scope.dadosPersonagem);
}]);

