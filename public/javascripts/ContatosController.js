var contatoApp = angular.module('contatoApp', []);
contatoApp.controller('ContatosController', function($scope, $http){
 
  function Contato() {
    this.nome = '';
    this.telefone = '';
  }
 
  $scope.contato = new Contato();
 
  $scope.contatos = [];


  $http.get('/contatos').success(function(retorno) {
    $scope.contatos = retorno.contatos;
  });
 
  $scope.adicionaContato = function() {
    $http.post('/contatos', $scope.contato).success(function() {
      $scope.contatos.push($scope.contato);
      $scope.contato = new Contato();
    });
  }

  $scope.removeContato = function() {
    console.log('delete');
  }

});