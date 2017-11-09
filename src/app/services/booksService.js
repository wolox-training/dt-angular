angular.module('wbooks').service('booksService', [
  '$http',
  function($http) {
    const api = 'https://wbooks-api-stage.herokuapp.com/api/v1';
    this.getBooks = function() {
      return $http.get(api+'/books');
    };
    this.getRentStatus = function(id) {
      return $http.get(api+'/books/'+id+'/rents')
    }
    this.getSugestions = function() {
      return $http.get('assets/Sugestions.json');
    };
    this.getComments = function() {
      return $http.get('assets/Comments.json');
    };
  }
]);
